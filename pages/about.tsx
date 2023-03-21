import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import Seo from "../components/components/Seo";
import AboutDisplay from "components/components/About/AboutDisplay";

useGLTF.preload("/assets/spoon.glb");


const projects: FC = () => {
  return (
    <>
      <Seo
        title="Arthur Lee | About Me "
        description="Arthur Lee about me page you can read about him"
        keywords="developer, chicago, software developer, full-stack, fullstack developer, sample projects, future projects"
      />
      <AboutDisplay />
    </>
  );
};

export default projects;
