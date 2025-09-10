// declarations.d.ts
declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader } from 'three';
  import { LoadingManager } from 'three';

  export interface GLTF {
    scene: THREE.Group;
    scenes: THREE.Group[];
    animations: THREE.AnimationClip[];
    cameras: THREE.Camera[];
    asset: object;
   parser: unknown;
userData: Record<string, unknown>;
  }

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
