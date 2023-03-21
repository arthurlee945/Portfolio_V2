import { colors } from "@/styles/style-variables";
import { FC, useContext, useEffect, useRef, useState, Suspense } from "react";
import styled from "styled-components";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import { m } from "framer-motion";
import { throttle } from "utils/throttle-functions";
import { GlobalContext } from "utils/GlobalContext";

const HeroShowcaseContainer = styled(m.div)`
  width: 100%;
  height: 100%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
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
  const globalCtx = useContext(GlobalContext);
  const [sceneState, setSceneState] = useState({
    hover: false,
    rotationX: 0,
    eyeRotation: {
      x: 0,
      y: 0,
    },
  });
  const { progress } = useProgress();

  const resetEventListener = () => {
    document.removeEventListener("mousemove", onMTEventMove);
    document.removeEventListener("touchmove", onMTEventMove);
    document.removeEventListener("mouseup", onMTEventEnd);
    document.removeEventListener("touchend", onMTEventEnd);
  };
  const onPressStart = () => {
    setSceneState((curr) => ({
      ...curr,
      hover: true,
    }));
    document.addEventListener("mouseup", onMTEventEnd);
    document.addEventListener("touchend", onMTEventEnd);
    document.addEventListener("mousemove", onMTEventMove);
    document.addEventListener("touchmove", onMTEventMove);
    globalCtx.setViewPortLock("opened");
  };
  const onMTEventMove = throttle<MouseEvent | TouchEvent>((eve: MouseEvent | TouchEvent) => {
    let { top, right, bottom, left } = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    let relativeX = eve.type === "mousemove" ? (eve as MouseEvent).clientX : (eve as TouchEvent).touches[0].clientX;
    let relativeY = eve.type === "mousemove" ? (eve as MouseEvent).clientY : (eve as TouchEvent).touches[0].clientY;
    if (relativeY < Math.floor(top) || relativeY > Math.floor(bottom) || relativeX < Math.floor(left) || relativeX > Math.floor(right)) {
      resetEventListener();
      onMTEventEnd();
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
  const onMTEventEnd = (event?: MouseEvent | TouchEvent) => {
    setSceneState((curr) => ({
      ...curr,
      hover: false,
      eyeRotation: {
        x: 0,
        y: 0,
      },
    }));
    resetEventListener();
    globalCtx.setViewPortLock("closed");
  };

  return (
    <HeroShowcaseContainer
      ref={containerRef}
      style={{ opacity: 0 }}
      animate={{ opacity: progress === 100 ? 1 : 0 }}
      onMouseDown={onPressStart}
      onTouchStart={onPressStart}
      transition= {{duration:0.5}}
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
