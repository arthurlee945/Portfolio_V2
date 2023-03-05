import Seo from "../components/components/Seo";
import HomePageHero from "../components/components/Homepage/HomePageHero";
import Introduction from "../components/components/Homepage/Introduction";
import RecentWorks from "components/components/Homepage/RecentWorks";
export default function Home() {
  return (
    <>
      <Seo
        title="Arthur Lee | Developer Home Page"
        description="Arthur Lee Portfolio Homepage with description of his experience and samples"
        keywords="developer, chicago, software developer, full-stack, fullstack developer"
      />
      <HomePageHero />
      <Introduction />
      <RecentWorks />
    </>
  );
}
