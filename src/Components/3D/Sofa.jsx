import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model2.glb");
  // const { position, rotation } = useControls({
  //   position: {
  //     value: [-3.500000000000021, 0.5999999999999998, 7.399999999999992],
  //     step: 0.1,
  //   },
  //   rotation: {
  //     value: [0, 2, 0],
  //     step: 0.1,
  //   },
  // });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.0002}
      position={[-3.500000000000021, 0.5999999999999998, 7.399999999999992]}
      rotation={[0, 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box003.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box004.geometry}
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
        geometry={nodes.Box009.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box010.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box011.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box012.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/model2.glb");
