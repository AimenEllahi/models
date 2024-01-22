import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      className="absolute top-0 left-0 bg-white !z-[100] w-screen h-screen flex items-center justify-center"
      center
    >
      <div className="text-black text-3xl">{progress.toFixed(2)}%</div>
    </Html>
  );
}
