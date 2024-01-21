import React, { useRef, useEffect, useState } from "react";
import { useGLTF, PresentationControls, Html } from "@react-three/drei";
import { Model as Chair } from "./Chair";
import { Model as Sofa } from "./Sofa";
import { gsap } from "gsap";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/isometric-cityscape13.glb");
  const [initalAnimationPlaying, setInitialAnimationPlaying] = useState(true);
  const { camera } = useThree();
  const groupRef = useRef();
  const timeline = gsap.timeline();
  const ferrisWheelRef = useRef();
  const windFanRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  useEffect(() => {
    timeline.fromTo(
      camera.position,
      { x: 5, y: 1, z: 10 },
      { x: 0, y: 0, z: 5, duration: 3, ease: "power2.inOut" }
    );
  }, []);

  useFrame(() => {
    // Check if the ferrisWheelRef is available and rotate it around the y-axis
    if (ferrisWheelRef.current) {
      ferrisWheelRef.current.rotation.y += 0.03;
    }

    if (windFanRefs.some((ref) => ref.current)) {
      windFanRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.rotation.z += 0.1;
        }
      });
    }
  });

  // const { position, rotation } = useControls("city", {
  //   position: {
  //     value: [3.1000000000000023, -0.7999999999999983, -1.9999999999999991],

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
      ref={groupRef}
      dispose={null}
      position={[3.1000000000000023, -0.7999999999999983, -1.9999999999999991]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.Landskape_plane_Landscape_color_1_0002.geometry}
        material={materials["Landscape_color_1.001"]}
      />

      <mesh
        name="cursor"
        geometry={nodes.Landskape_plane_Landscape_color_1_0002_2.geometry}
        material={materials["TreeGreen.005"]}
      />
      <mesh
        name="cursor"
        geometry={nodes.Landskape_plane_Landscape_color_1_0002_3.geometry}
        material={materials["TreeGreen.005"]}
      />
      <mesh
        geometry={nodes.Landskape_plane_Landscape_color_1_0001.geometry}
        material={materials.PineTrees}
      />
      <mesh
        geometry={nodes.Landskape_plane_Landscape_color_1_0001_1.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Landskape_plane_Landscape_color_1_0001_2.geometry}
        material={materials["TreeGreen.003"]}
      />
      <mesh
        geometry={nodes.wind2.geometry}
        material={materials.LightMetal}
        position={[16.27, 2.7, -13.83]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2001.geometry}
        material={materials.LightMetal}
        position={[23.93, 2.07, -22.8]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2002.geometry}
        material={materials.LightMetal}
        position={[-6.28, 5.29, -21.28]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2003.geometry}
        material={materials.LightMetal}
        position={[-14.24, 2.47, 23.59]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2004.geometry}
        material={materials.LightMetal}
        position={[3.75, 1.37, 25.82]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2005.geometry}
        material={materials.LightMetal}
        position={[24.98, 1.31, 16.74]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
      />
      <mesh
        geometry={nodes.wind2_head.geometry}
        material={materials.WindHead}
        position={[16.48, 4.65, -13.79]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[0]}
      />
      <mesh
        geometry={nodes.wind2_head001.geometry}
        material={materials.WindHead}
        position={[24.14, 4.03, -22.75]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[1]}
      />
      <mesh
        geometry={nodes.wind2_head002.geometry}
        material={materials.WindHead}
        position={[-6.07, 7.25, -21.24]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[2]}
      />
      <mesh
        geometry={nodes.wind2_head003.geometry}
        material={materials.WindHead}
        position={[-14.04, 4.43, 23.63]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[3]}
      />
      <mesh
        geometry={nodes.wind2_head004.geometry}
        material={materials.WindHead}
        position={[3.96, 3.32, 25.86]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[4]}
      />
      <mesh
        geometry={nodes.wind2_head005.geometry}
        material={materials.WindHead}
        position={[25.19, 3.27, 16.78]}
        rotation={[0, 1.37, 0]}
        scale={0.08}
        ref={windFanRefs[5]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.RedLight}
        position={[23.88, 4.12, -22.8]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.RedLight}
        position={[16.23, 4.74, -13.83]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.RedLight}
        position={[-6.32, 7.34, -21.29]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.RedLight}
        position={[-14.28, 4.52, 23.58]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.RedLight}
        position={[3.72, 3.41, 25.81]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />

      <Chair />
      <Sofa />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.RedLight}
        position={[24.94, 3.36, 16.73]}
        rotation={[0, -0.16, 0]}
        scale={0.05}
      />

      <group
        name="cursor"
        position={[1.71, 0.36, 0.36]}
        scale={[0.36, 0.65, 4.9]}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["SceneBl;ack"]}
        />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["Rocks.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/isometric-cityscape13.glb");
