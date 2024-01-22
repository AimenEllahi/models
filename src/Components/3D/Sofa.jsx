import { useControls } from "leva";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Sofa.glb");
  // const { position, rotation } = useControls("sofa", {
  //   position: {
  //     value: [0, 0, 0],
  //     step: 1,
  //   },
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.1,
  //   },
  // });

  return (
    <group {...props} dispose={null} scale={0.003} position={[-52, -24.1, 115]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/Sofa.glb");
