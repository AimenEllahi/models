import React, { useEffect } from "react";
import { Model as Grass } from "./3D/Grass";
import { useControls } from "leva";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function GrassPlatform() {
  let rows = 4;
  let columns = 4;
  const spacing = 3.3;
  const { camera } = useThree();
  const timeline = gsap.timeline();
  // const { position, rotation } = useControls({
  //   position: {
  //     value: [-2, -1, 3],
  //     step: 0.1,
  //   },
  //   rotation: {
  //     value: [0, 3, 0],
  //     step: 0.1,
  //   },
  // });

  useEffect(() => {
    timeline
      .to(camera.position, {
        duration: 1,
        x: 2,
        y: 2.5,
        z: 10,
      })
      .to(camera.rotation, {
        duration: 1,
        y: 0,
        x: -0.3,
        z: 0,
      });
  }, []);

  //[-3, -1, -25]

  return (
    <group position={[0, -1, -5]} rotation={[0, 0, 0]}>
      {Array(rows)
        .fill()
        .map((_, i) => {
          const rowOffset = (columns - 1) * 0.5 * spacing;
          return (
            <group receiveShadow key={i} position={[i, 0, i * spacing]}>
              {Array(columns)
                .fill()
                .map((_, j) => {
                  return (
                    <Grass key={j} position={[j * spacing - rowOffset, 0, 0]} />
                  );
                })}
            </group>
          );
        })}
    </group>
  );
}
