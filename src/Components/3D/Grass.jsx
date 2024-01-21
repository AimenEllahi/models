import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model({ position }) {
  const gltf = useGLTF("/dry_thin_grass-transformed.glb");

  const clonedGltf = useMemo(() => {
    if (gltf.scene) {
      const cloned = gltf.scene.clone(true);
      //to cast shadow
      cloned.traverse((obj) => {
        obj.castShadow = true;
        obj.receiveShadow = true;
      });
      return cloned;
    }
  }, [gltf.scene]);

  return (
    <group
      // {...props}
      dispose={null}
      position={position}
      // rotation={rotation}
      scale={[4, 2, 3]}
    >
      <primitive object={clonedGltf} />
    </group>
  );
}

useGLTF.preload("/dry_thin_grass.glb");
