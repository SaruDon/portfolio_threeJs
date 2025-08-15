import React, { useRef, useCallback } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Java = ({ position = [0, 0, 0] }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/java.glb");
  const { actions } = useAnimations(animations, group);

  // collect references like in Rings
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(
    () => {
      if (!group.current) return;

      // Set position dynamically
      group.current.position.set(position[0], position[1], position[2]);

      // Optional: Animate something (rotation like Rings)
      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5 })
        .to(group.current.rotation, {
          y: `+=${Math.PI * 2}`,
          duration: 4,
          ease: "power1.inOut",
        });
    },
    { dependencies: position }
  );

  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Cube">
              <mesh
                ref={getRef}
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane"
              position={[0.787, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                ref={getRef}
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Plane001"
              position={[0, 0, 1.518]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.218}
            >
              <mesh
                ref={getRef}
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials["Material.002"]}
                morphTargetDictionary={nodes.Plane001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Torus001"
              position={[-0.138, -0.061, -0.771]}
              rotation={[-0.14, -0.02, 0.097]}
              scale={[0.467, 0.432, 0.432]}
            >
              <mesh
                ref={getRef}
                name="Torus001_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group
              name="Torus000"
              position={[0.095, -0.029, -0.88]}
              rotation={[-0.134, -0.046, 0.098]}
              scale={[0.454, 0.419, 0.303]}
            >
              <mesh
                ref={getRef}
                name="Torus000_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus000_0.geometry}
                material={materials.Material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/java.glb");

export default Java;
