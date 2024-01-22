import Loader from "./Loader";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls, Environment } from "@react-three/drei";
import Grass from "./Grass";
import { Model as Chair } from "./3D/Chair";
import { Model as Sofa } from "./3D/Sofa";

export default function Scene() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <Sky azimuth={1} inclination={0.6} distance={1000} />
        <ambientLight intensity={2} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1}
          color={0xec8f5e}
        />

        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Loader />}>
          <Environment preset="sunset" />
          <group rotation={[0, 0.3, 0]}>
            <Grass />
            <Chair />
            <Sofa />
          </group>
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
