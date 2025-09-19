"use client";
import React, { ReactNode } from "react";
import { cn } from "../../lib/utlis";


interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
children: ReactNode;
showRadialGradient?: boolean; // kept for API compatibility (applies a subtle mask)
}


/**
* Static, smooth background with a plain gradient.
* - Removes animations, filters, and runtime resize logic (no jank, no flicker)
* - Keeps original props so you don't need to refactor callers
*/
export const AuroraBackground = ({
className,
children,
showRadialGradient = false,
...props
}: AuroraBackgroundProps) => {
return (
<main>
<div
className={cn(
// Base container
"relative max-w-full overflow-x-hidden bg-gradient-to-br from-[#1f1147] via-[#2b1664] to-[#0c0a1a] text-slate-50",
// Optional soft vignette mask (very light)
showRadialGradient &&
"[mask-image:radial-gradient(120%_100%_at_100%_0%,black_40%,transparent_80%)]",
className
)}
{...props}
>
{/* Content */}
<div className="relative z-10">
{children}
</div>


{/* Optional: a super-subtle top highlight to add depth (no animation) */}
<div
aria-hidden
className="pointer-events-none absolute inset-0 opacity-[0.06]"
style={{
background:
"radial-gradient(60% 40% at 80% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
}}
/>
</div>
</main>
);
};
