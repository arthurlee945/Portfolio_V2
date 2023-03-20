import { AnimatePresence, m } from "framer-motion";
import { FC, SyntheticEvent, useEffect, MouseEvent, TouchEvent, useState, Suspense } from "react";
import styled, { css } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { colors, medias } from "@/styles/style-variables";

interface SZProps {}
const ShapeZoomContainer = styled.div<{ $sceneStarted: boolean; $playing: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  border: 1px solid ${colors.white};
  flex: 1;
  aspect-ratio: 1/0.3;
  overflow: hidden;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    aspect-ratio: 1/0.35;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    aspect-ratio: 1/0.5;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid ${colors.white};
    transition: height 250ms;
    height: 14%;
    width: 200%;
    background-repeat: repeat;
    transition: background-position 250ms;
    background-image: url("data:image/svg+xml,%0A%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%0Astyle='opacity:0.5' x='0%25' y='0%25' width='100%25' height='100%25' viewBox='0 0 500.0 100.0' enable-background='new 0 0 500.0 100.0' xml:space='preserve'%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M36.53,15.84C38.72,15.84,40.49,17.56,40.49,19.68C40.49,21.80,38.72,23.52,36.53,23.52C34.34,23.52,32.57,21.80,32.57,19.68C32.57,17.56,34.34,15.84,36.53,15.84z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M77.03,73.41C79.22,73.41,80.99,75.13,80.99,77.25C80.99,79.36,79.22,81.08,77.03,81.08C74.84,81.08,73.07,79.36,73.07,77.25C73.07,75.13,74.84,73.41,77.03,73.41z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M124.04,103.35C126.23,103.35,128.00,105.07,128.00,107.19C128.00,109.31,126.23,111.03,124.04,111.03C121.85,111.03,120.08,109.31,120.08,107.19C120.08,105.07,121.85,103.35,124.04,103.35z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M236.11,28.88C238.30,28.88,240.08,30.60,240.08,32.72C240.08,34.84,238.30,36.56,236.11,36.56C233.93,36.56,232.15,34.84,232.15,32.72C232.15,30.60,233.93,28.88,236.11,28.88z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M225.00,80.14C227.19,80.14,228.96,81.86,228.96,83.97C228.96,86.09,227.19,87.81,225.00,87.81C222.81,87.81,221.04,86.09,221.04,83.97C221.04,81.86,222.81,80.14,225.00,80.14z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M163.87,54.13C166.06,54.13,167.83,55.84,167.83,57.96C167.83,60.08,166.06,61.80,163.87,61.80C161.68,61.80,159.91,60.08,159.91,57.96C159.91,55.84,161.68,54.13,163.87,54.13z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M101.23,39.74C103.42,39.74,105.20,41.46,105.20,43.58C105.20,45.70,103.42,47.42,101.23,47.42C99.05,47.42,97.27,45.70,97.27,43.58C97.27,41.46,99.05,39.74,101.23,39.74z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M139.77,21.02C141.95,21.02,143.73,22.74,143.73,24.86C143.73,26.98,141.95,28.70,139.77,28.70C137.58,28.70,135.80,26.98,135.80,24.86C135.80,22.74,137.58,21.02,139.77,21.02z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M341.31,20.04C343.50,20.04,345.27,21.76,345.27,23.88C345.27,26.00,343.50,27.72,341.31,27.72C339.12,27.72,337.34,26.00,337.34,23.88C337.34,21.76,339.12,20.04,341.31,20.04z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M294.77,53.87C296.95,53.87,298.73,55.58,298.73,57.70C298.73,59.82,296.95,61.54,294.77,61.54C292.58,61.54,290.80,59.82,290.80,57.70C290.80,55.58,292.58,53.87,294.77,53.87z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M358.58,75.48C360.77,75.48,362.55,77.20,362.55,79.32C362.55,81.44,360.77,83.16,358.58,83.16C356.40,83.16,354.62,81.44,354.62,79.32C354.62,77.20,356.40,75.48,358.58,75.48z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M426.90,24.80C429.09,24.80,430.87,26.52,430.87,28.64C430.87,30.76,429.09,32.48,426.90,32.48C424.72,32.48,422.94,30.76,422.94,28.64C422.94,26.52,424.72,24.80,426.90,24.80z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M467.97,53.92C470.16,53.92,471.93,55.64,471.93,57.76C471.93,59.88,470.16,61.60,467.97,61.60C465.78,61.60,464.01,59.88,464.01,57.76C464.01,55.64,465.78,53.92,467.97,53.92z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M377.88,29.36C380.07,29.36,381.85,31.08,381.85,33.20C381.85,35.31,380.07,37.03,377.88,37.03C375.69,37.03,373.92,35.31,373.92,33.20C373.92,31.08,375.69,29.36,377.88,29.36z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M162.75,26.36C164.94,26.36,166.71,28.08,166.71,30.20C166.71,32.32,164.94,34.03,162.75,34.03C160.56,34.03,158.79,32.32,158.79,30.20C158.79,28.08,160.56,26.36,162.75,26.36z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M19.14,58.74C21.32,58.74,23.10,60.46,23.10,62.57C23.10,64.69,21.32,66.41,19.14,66.41C16.95,66.41,15.17,64.69,15.17,62.57C15.17,60.46,16.95,58.74,19.14,58.74z'/%3E%3Cpath fill='%23FAF9F6' stroke='%23000000' fill-opacity='1.000' stroke-opacity='0.000' fill-rule='nonzero' stroke-width='0.3977274' stroke-linejoin='miter' stroke-linecap='square' d='M401.21,84.18C403.40,84.18,405.17,85.90,405.17,88.02C405.17,90.14,403.40,91.85,401.21,91.85C399.02,91.85,397.25,90.14,397.25,88.02C397.25,85.90,399.02,84.18,401.21,84.18z'/%3E%3C/svg%3E");
  }
  .animation-button {
    z-index: 1;
    position: absolute;
    color: ${colors.white};
  }
  .start-button {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 3rem;
    backdrop-filter: blur(3px) brightness(0.5);
    transition: backdrop-filter 300ms, letter-spacing 300ms;
    &:hover {
      letter-spacing: 0.5rem;
    }
  }
  .toggle-button {
    width: 25px;
    height: 25px;
    top: 15px;
    left: 15px;
    overflow: hidden;
    > span {
      position: absolute;
      width: 5px;
      height: 100%;
      left: 0;
      top: 0;
      background-color: ${colors.white};
      transition: transform 200ms, opacity 200ms;
      &:nth-of-type(2) {
        transform-origin: top left;
      }
      &:nth-of-type(3) {
        transform-origin: bottom left;
      }
      &:nth-of-type(4) {
        left: unset;
        right: 0;
      }
    }
    ${({ $playing }) =>
      !$playing &&
      css`
        > span {
          &:nth-of-type(2) {
            transform: rotate(-50deg);
          }
          &:nth-of-type(3) {
            transform: rotate(50deg);
          }
          &:nth-of-type(4) {
            opacity: 0;
          }
        }
      `}
  }
  ${({ $sceneStarted, $playing }) =>
    $sceneStarted &&
    $playing &&
    css`
      &:before {
        animation: ground-move 2000ms linear infinite;
        @keyframes ground-move {
          to {
            transform: translateX(-50%);
          }
        }
      }
    `}
`;

const RunnerModel: FC<{ playing?: boolean }> = ({ playing }) => {
  const carModel = useGLTF("/assets/cat.glb");

  const { ref, actions, names } = useAnimations(carModel.animations);

  useEffect(() => {
    if (playing) {
      actions[names[0]]?.setEffectiveTimeScale(2.5);
      actions[names[0]]?.reset().fadeIn(0.25).play();
    } else {
      actions[names[0]]?.fadeOut(0.25);
    }
  }, [playing]);

  return <primitive ref={ref} object={carModel.scene} position={[0, -2.7, 0]} />;
};

const ShapeZoom: FC<SZProps> = ({}) => {
  const [sceneStarted, setSceneStarted] = useState({
    started: false,
    playing: true,
  });
  const handleSceneStart = (e: SyntheticEvent) => {
    e.stopPropagation();
    setSceneStarted((curr) => ({
      ...curr,
      started: true,
    }));
  };
  const handleAnimationToggle = (e: SyntheticEvent) => {
    e.stopPropagation();
    setSceneStarted((curr) => ({
      ...curr,
      playing: !curr.playing,
    }));
  };

  return (
    <ShapeZoomContainer $sceneStarted={sceneStarted.started} $playing={sceneStarted.playing}>
      <Canvas className="model-canvas" gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 15]} intensity={2} />
        <Suspense fallback={null}>
          <RunnerModel playing={sceneStarted.started && sceneStarted.playing} />
        </Suspense>
      </Canvas>
      <AnimatePresence mode="wait">
        {!sceneStarted.started ? (
          <m.button
            key="start-button"
            style={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            className="animation-button start-button"
            onClick={handleSceneStart}
          >
            START!
          </m.button>
        ) : (
          <m.button
            key="end-button"
            style={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            className="animation-button toggle-button"
            onClick={handleAnimationToggle}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </m.button>
        )}
      </AnimatePresence>
    </ShapeZoomContainer>
  );
};

export default ShapeZoom;
