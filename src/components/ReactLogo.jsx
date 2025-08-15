import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { flatPointsToSegment } from "../../node_modules/gsap/utils/paths";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float dispose={null} floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.5} {...props}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[-7, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.39]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
