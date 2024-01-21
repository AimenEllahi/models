import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Model as City } from "./3D/Isometric-cityscape13";
import GrassPlatform from "./GrassPlatform";
import Loader from "./Loader";

export default function Scene() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ rotation: [0, 2, 0] }}>
        <color attach="background" args={["#171720"]} />

        <ambientLight color={0xe8c37b} intensity={2} />
        <directionalLight
          position={[-10, 10, 10]}
          intensity={6}
          color={0xec8f5e}
        />
        <directionalLight
          color={0xec8f5e}
          position={[-69, 24, 14]}
          intensity={6}
        />
        <Suspense fallback={<Loader />}>
          <Environment preset="forest" />
          <Sky sunPosition={[5, 5, 5]} />
          <group>
            {/* <GrassPlatform /> */}
            <City />
          </group>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
