import { Canvas } from "@react-three/fiber";
import React from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width: 440px)",
  });

  // const x = useControls({
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const sizes = calculateSizes;

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-3xl text-white text-center font-generalsans">
          Hi, I'm Sarvesh Khamkar <span className="waving-hand">👋</span>
        </p>
        <p className="text-gray_gradient font-generalsans sm:text-5xl text-l font-bold text-center">
          Turning ideas into scalable, user-friendly applications
        </p>
      </div>

      <div className="w-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              position={sizes.deskPosition}
              rotation={sizes.deskRotation}
              scale={sizes.deskScale}
            />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.7} />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full h-full absolute inset-0"></div>
    </section>
  );
};

export default Hero;
