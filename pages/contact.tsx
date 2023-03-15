import { FC } from "react";
import Seo from "../components/components/Seo";
import ContactFormDisplay from "components/components/Contact/ContactFormDisplay";

const projects: FC = () => {
  return (
    <>
      <Seo
        title="Arthur Lee | Contact Me"
        description="Arthur Lee Contact page for people to send email"
        keywords="developer, chicago, software developer, full-stack, fullstack developer, sample projects, future projects"
      />
      <ContactFormDisplay />
    </>
  );
};

export default projects;
