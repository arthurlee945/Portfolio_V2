import { m } from "framer-motion";
import { FC, useRef } from "react";
import styled from "styled-components";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, useFrame, ThreeElements } from "@react-three/fiber";
import { medias, colors } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";

useLoader.preload(GLTFLoader, "/assets/mail-blue.glb");
useLoader.preload(GLTFLoader, "/assets/mail-red.glb");

const ConfirmationContainer = styled(m.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: 650px;
  border: 1px solid ${colors.white};
  padding: 25px 50px 50px;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    width: 85%;
    min-width: 400px;
    padding: 15px 25px 35px;
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    padding: 10px 15px 35px;
    width: 100%;
    min-width: auto;
  }
  .model-canvas {
    width: 100%;
    height: 375px;
  }
  .confirmation-message {
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.4rem;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 1.2rem;
      line-height: 1.75rem;
    }
  }
`;
interface CFCProps {
  successful: boolean;
}
const MailModel: FC<{ successful: boolean }> = ({ successful }) => {
  const iconRef = useRef<ThreeElements["primitive"]>(null);
  useFrame((state, delta) => {
    (iconRef.current as ThreeElements["primitive"]).rotation.y += delta;
  });
  const IconModel = useLoader(GLTFLoader, `/assets/mail-${successful ? "blue" : "red"}.glb`);
  return <primitive ref={iconRef} position={[0, 0.35, -0.5]} object={IconModel.scene} />;
};
const ContactFormConfirmation: FC<CFCProps> = ({ successful }) => {
  return (
    <ConfirmationContainer
      key="confirmation-card"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="model-canvas">
        <Canvas gl={{ alpha: true }}>
          <pointLight position={[5, 10, 15]} intensity={0.35} />
          <pointLight position={[-5, 10, 15]} intensity={0.35} />
          <pointLight position={[0, -5, 5]} intensity={0.05} />
          <MailModel successful={successful} />
        </Canvas>
      </div>
      <h2 className="confirmation-message">
        {successful ? (
          <>
            Thank you for submitting the form!
            <br />I can't wait to connect with you further.
          </>
        ) : (
          <>
            I'm Sorry for any inconvenience!
            <br />
            Please try again later.
          </>
        )}
      </h2>
    </ConfirmationContainer>
  );
};

export default ContactFormConfirmation;
