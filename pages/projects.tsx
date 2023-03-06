import { FC } from "react";
import Seo from "../components/components/Seo";
import ProjectDisplay from "components/components/Projects/ProjectDisplay";

const projects: FC = () => {
  return (
    <>
      <Seo
        title="Arthur Lee | Projects"
        description="Arthur Lee Projects page with future and currently completed"
        keywords="developer, chicago, software developer, full-stack, fullstack developer, sample projects, future projects"
      />
      <ProjectDisplay />
    </>
  );
};

export default projects;
