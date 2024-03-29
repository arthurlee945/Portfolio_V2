import { m } from "framer-motion";
import { FC, SyntheticEvent, useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";

const SpoonZoomContainer = styled(m.div)`
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;
  backdrop-filter:blur(10px) brightness(0.7) grayscale(0.5);
`;

interface SZProps {
  onClick: (e: SyntheticEvent) => void;
}
const Spoon = () => {
  const spoonRef = useRef<ThreeElements["primitive"]>(null);
  useFrame((state, delta) => {
    (spoonRef.current as ThreeElements["primitive"]).rotation.z += delta;
  });
  const spoon = useGLTF("/assets/spoon.glb");

  return <primitive ref={spoonRef} position={[0, -0.5, 1.5]} rotation={[Math.PI / 2, 0, 0]} object={spoon.scene} />;
};

const SpoonZoom: FC<SZProps> = ({ onClick }) => {
  const spoonZoomRef = useRef<HTMLDivElement>(null);
  const { progress } = useProgress();
  return (
    <SpoonZoomContainer
      key="spoon-zoom-scene"
      id="spoon-zoom"
      ref={spoonZoomRef}
      initial={{ opacity: 0  }}
      animate={{ opacity: progress === 100 ? 1 : 0  }}
      transition={{duration:0.2}}
      onClick={onClick}
    >
      <Canvas gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 15]} />
        <pointLight position={[-5, 10, 15]} />
        <pointLight position={[0, -5, 5]} intensity={0.2} />
        <Spoon />
      </Canvas>
    </SpoonZoomContainer>
  );
};

export default SpoonZoom;
