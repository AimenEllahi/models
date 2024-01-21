import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model1.glb");
  // const { position, rotation } = useControls("chair", {
  //   position: {
  //     value: [-6.40000000000001, 0.6999999999999996, 5.699999999999998],
  //     step: 0.1,
  //   },
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.1,
  //   },
  // });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.0002}
      position={[-3.7000000000000175, 0.6999999999999996, 6.699999999999997]}
      rotation={[0, 1.8, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box003.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box005.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box007.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box008.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/model1.glb");
