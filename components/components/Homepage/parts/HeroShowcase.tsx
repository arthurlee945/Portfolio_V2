import { colors } from "@/styles/style-variables";
import { FC } from "react";
import styled from "styled-components";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

const HeroShowcaseContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface HSTypes {
  className?: string;
}

const HeroShowcase: FC<HSTypes> = ({}) => {
  return (
    <HeroShowcaseContainer>
      <Canvas gl={{ alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 10, 16]} intensity={1} />
        <pointLight position={[-5, 10, 16]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </HeroShowcaseContainer>
  );
};

export default HeroShowcase;
