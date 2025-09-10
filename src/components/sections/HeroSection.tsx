"use client";
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';


interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
  text = 'Zishes',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#FFFFFF',
  strokeColor = '#8E2DE2',
  strokeWidth = 2,
  className = '',
  minFontSize = 60,
  maxFontSize = 200
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);
    newFontSize = Math.min(newFontSize, maxFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, [scale, text]);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };

          const d = dist(mouseRef.current, charCenter);

          const getAttr = (distance: number, minVal: number, maxVal: number) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : '0';
          const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : '1';

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, chars.length]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-transparent">
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

        .stroke span {
          position: relative;
          color: ${textColor};
        }

        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between' : ''
        } ${stroke ? 'stroke' : ''} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

// 3D Model Component
// Replace the Model3D component with this typed version
const Model3D: React.FC<{
  modelPath: string;
  position: [number, number, number];
  scale?: number;
  animationDelay?: number;
  rotation?: [number, number, number];
  isMobile: boolean;
}> = ({
  modelPath,
  position,
  scale = 0.3,
  animationDelay = 0,
  rotation = [0, 0, 0],
  isMobile
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const animationProgress = useRef(0);
  

  // Add type annotation for the GLTF result
  const gltf = useLoader(GLTFLoader, modelPath) as GLTF;

  // Rest of the component remains the same...
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    if (animationStarted) {
      if (animationProgress.current < 1) {
        animationProgress.current += 0.08;
        const progress = Math.min(animationProgress.current, 1);
        meshRef.current.position.x = THREE.MathUtils.lerp(0, position[0], progress);
        meshRef.current.position.y = THREE.MathUtils.lerp(0, position[1], progress);
        meshRef.current.position.z = THREE.MathUtils.lerp(0, position[2], progress);
      } else {
        // Reduce animation intensity on mobile for better performance
        const animationIntensity = isMobile ? 0.1 : 0.2;
        meshRef.current.position.y = position[1] + Math.sin(time * 2 + animationDelay) * animationIntensity;
        
        // Apply rotation with reduced intensity on mobile
        meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.5 + animationDelay) * (isMobile ? 0.05 : 0.1);
      }
    }

    const targetScale = hovered && !isMobile ? scale * 1.5 : scale;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale), 
      0.1
    );
  });

  return (
    <group
      ref={meshRef}
      position={[0, 0, 0]}
      rotation={rotation}
      onPointerEnter={() => !isMobile && setHovered(true)}
      onPointerLeave={() => !isMobile && setHovered(false)}
    >
      <primitive object={gltf.scene} scale={scale} />
     
    </group>
  );
};

// 3D Scene Component
const Scene3D: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  // Adjust model positions and scales for mobile
  const models = isMobile ? [
    {
      path: '/models/airpods.glb',
      position: [-3, 5, -1] as [number, number, number],
      scale: 1.2,
      delay: 0
    },
    {
      path: '/models/iphone.glb',
      position: [3.5, -4.5, -1.5] as [number, number, number],
      scale: 3.5,
      delay: 100,
      rotation: [0, Math.PI, 0] as [number, number, number]
    },
    {
      path: '/models/lap.glb',
      position: [-2, -4.5, 1] as [number, number, number],
      scale: 0.07,
      delay: 200,
      rotation: [0, Math.PI, 0] as [number, number, number]
    },
    {
      path: '/models/pods.glb',
      position: [3, 3, 0.5] as [number, number, number],
      scale: 3.7,
      delay: 300
    },
  ] : [
    {
      path: '/models/airpods.glb',
      position: [-8, 3, -2] as [number, number, number],
      scale: 1.3,
      delay: 0
    },
    {
      path: '/models/iphone.glb',
      position: [9, -1, -3] as [number, number, number],
      scale: 4,
      delay: 100,
      rotation: [0, Math.PI, 0] as [number, number, number]
    },
    {
      path: '/models/lap.glb',
      position: [-5.5, -2, 2] as [number, number, number],
      scale: 0.072,
      delay: 200,
      rotation: [0, Math.PI, 0] as [number, number, number]
    },
    {
      path: '/models/pods.glb',
      position: [7, 2, 1] as [number, number, number],
      scale: 4,
      delay: 300
    },
  ];

  return (
    <>
      <ambientLight intensity={isMobile ? 0.8 : 0.6} />
      <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.3 : 0.4} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} />
      <directionalLight position={[0, 5, 5]} intensity={isMobile ? 0.4 : 0.3} />
      
      {models.map((model, index) => (
        <Model3D
          key={index}
          modelPath={model.path}
          position={model.position}
          scale={model.scale}
          animationDelay={model.delay}
          rotation={model.rotation || [0, 0, 0]}
          isMobile={isMobile}
        />
      ))}
    </>
  );
};

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      return window.innerWidth <= 768;
    };
    
    // Check WebGL support
   // Replace the existing checkWebGL function with this:
const checkWebGL = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
     console.error(e);
    return false;
  }
};

// Then update the usage:
setWebGLAvailable(checkWebGL());
    setIsMobile(checkIsMobile());
    setWebGLAvailable(checkWebGL());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 md:z-30">
        {webGLAvailable ? (
          <Canvas 
            camera={{ 
              position: isMobile ? [0, 0, 12] : [0, 0, 10], 
              fov: isMobile ? 60 : 50 
            }}
            gl={{
              antialias: false,
              powerPreference: isMobile ? "low-power" : "high-performance"
            }}
            dpr={isMobile ? 1 : 2} // Reduce pixel ratio on mobile for performance
          >
            <Suspense fallback={null}>
              <Scene3D isMobile={isMobile} />
            </Suspense>
            {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
          </Canvas>
        ) : (
          // Fallback background if WebGL is not supported
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-800"></div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 mt-28 text-center">
        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-tight">
            The Marketplace
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#d4ac25] leading-tight mt-4">
            Reborn as a Tournament
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-2xl md:text-2xl lg:text-2xl text-white">
            Sell Items Through Skill-Based Tournaments Instead Of Haggling.
          </p>
          <p className="text-xl md:text-xl lg:text-xl text-purple-200 mt-2 hidden md:block">
            No Spam, No Lowballs—Just Fair Competitions Where Everyone Wins.
          </p>
        </motion.div>

    {/* CTA Buttons */}
  {/* CTA Buttons */}
<motion.div
  className="flex flex-col sm:flex-row gap-4 justify-center relative bottom-5"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.5 }}
>
  <motion.button
    className="relative font-bold py-3 px-6 rounded-full text-sm sm:text-lg w-full sm:w-auto mx-auto overflow-hidden group mb-3 sm:mb-0 sm:mr-3"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ 
      background: "linear-gradient(45deg, #8E2DE2, #4A00E0)",
      boxShadow: "0 4px 20px rgba(142, 45, 226, 0.4)"
    }}
  >
    <span className="relative z-10 text-white flex items-center justify-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
        <path d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
      </svg>
      Download for Android
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-[#FECF33] to-[#FECF33] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  </motion.button>
  
  <motion.button
    className="relative font-bold py-3 px-6 rounded-full text-sm sm:text-lg w-full sm:w-auto mx-auto overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{ 
      background: "linear-gradient(45deg, #8E2DE2, #4A00E0)",
      boxShadow: "0 4px 20px rgba(142, 45, 226, 0.4)"
    }}
  >
    <span className="relative z-10 text-white flex items-center justify-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
      </svg>
      Download for iOS
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-[#FECF33] to-[#FECF33] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  </motion.button>
</motion.div>
    {/* How It Works Button */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="mb-16"
    >
      <motion.button
        className="text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 border-2 border-purple-500 hover:bg-purple-900 hover:bg-opacity-20 hover:shadow-lg hover:shadow-purple-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          How It Works
        </span>
      </motion.button>
    </motion.div>

    {/* TextPressure Component */}
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2.2 }}
    >
      <TextPressure 
        text="Zishes"
        textColor="#FFFFFF"
        strokeColor="#8E2DE2"
        strokeWidth={3}
        className="text-6xl md:text-8xl lg:text-9xl"
        minFontSize={30}
        maxFontSize={70}
      />
    </motion.div>
  </div>

  
</div>


);
};

export default HeroSection;