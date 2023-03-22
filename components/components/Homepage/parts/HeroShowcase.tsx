import { colors } from "@/styles/style-variables";
import { FC, useEffect, useRef, useState, Suspense } from "react";
import styled from "styled-components";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import { m } from "framer-motion";
import { throttle } from "utils/throttle-functions";

const HeroShowcaseContainer = styled(m.div)`
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
interface ProfileProps {
  hover?: boolean;
  rotationX: number;
  eyeRotation: {
    x: number;
    y: number;
  };
}
const ProfileModel: FC<ProfileProps> = ({ hover, rotationX, eyeRotation }) => {
  const profileRef = useRef<ThreeElements["primitive"]>(null);
  const profileModel = useGLTF("/assets/profile.glb");
  useFrame((state, delta) => {
    !hover && ((profileRef.current as ThreeElements["primitive"]).rotation.y += delta / 2);
  });
  useEffect(() => {
    const leftEye = (profileRef.current as ThreeElements["primitive"]).children.find((mesh: any) => mesh.name === "EyeLeft001");
    const RightEye = (profileRef.current as ThreeElements["primitive"]).children.find((mesh: any) => mesh.name === "EyeRight001");
    leftEye.rotation.y = (Math.PI / 10) * eyeRotation.x;
    RightEye.rotation.y = (Math.PI / 10) * eyeRotation.x;
    leftEye.rotation.x = (Math.PI / 12) * -eyeRotation.y;
    RightEye.rotation.x = (Math.PI / 12) * -eyeRotation.y;
  }, [eyeRotation.x, eyeRotation.y]);
  return <primitive ref={profileRef} object={profileModel.scene} position={[0, -3, 0.85]} rotation={[0, (Math.PI / 4) * rotationX, 0]} />;
};

const HeroShowcase: FC<HSTypes> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sceneState, setSceneState] = useState({
    hover: false,
    rotationX: 0,
    eyeRotation: {
      x: 0,
      y: 0,
    },
  });
  const { progress } = useProgress();

  const onHoverState = (state: "start" | "end") => {
    const eyeRotation =
      state === "end"
        ? {
            eyeRotation: {
              x: 0,
              y: 0,
            },
          }
        : {};
    setSceneState((curr) => ({
      ...curr,
      hover: state === "start" ? true : false,
      ...eyeRotation,
    }));
    if (state === "start") {
      document.addEventListener("mousemove", onEventMove);
    } else {
      document.removeEventListener("mousemove", onEventMove);
    }
  };
  const onEventMove = throttle<MouseEvent>((eve: MouseEvent) => {
    let { top, right, bottom, left } = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    let relativeX = (eve as MouseEvent).clientX;
    let relativeY = (eve as MouseEvent).clientY;
    if (relativeY < Math.floor(top) || relativeY > Math.floor(bottom) || relativeX < Math.floor(left) || relativeX > Math.floor(right)) {
      onHoverState("end");
      return;
    }
    let diffX = -1 + ((relativeX - left) / (right - left)) * 2;
    let diffY = 1 - ((relativeY - top) / (bottom - top)) * 2;
    setSceneState((curr) => ({
      ...curr,
      rotationX: diffX,
      eyeRotation: {
        x: diffX,
        y: diffY,
      },
    }));
  }, 25);

  return (
    <HeroShowcaseContainer
      ref={containerRef}
      style={{ opacity: 0 }}
      animate={{ opacity: progress === 100 ? 1 : 0 }}
      onHoverStart={onHoverState.bind(null, "start")}
      onHoverEnd={onHoverState.bind(null, "end")}
      transition={{ duration: 0.4 }}
    >
      <Canvas gl={{ alpha: true }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 10, 16]} intensity={0.5} />
        <pointLight position={[-5, 10, 16]} intensity={0.5} />
        <Suspense fallback={null}>
          <ProfileModel hover={sceneState.hover} rotationX={sceneState.rotationX} eyeRotation={sceneState.eyeRotation} />
        </Suspense>
      </Canvas>
    </HeroShowcaseContainer>
  );
};

export default HeroShowcase;
