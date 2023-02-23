import Seo from "../components/components/Seo";
import HomePageHero from "../components/components/Homepage/HomePageHero";
export default function Home() {
  return (
    <>
      <Seo
        title="Arthur Lee | Developer"
        description="Arthur Lee Portfolio Homepage"
        keywords="developer, chicago, software developer, full-stack, fullstack developer"
      />
      <HomePageHero />
    </>
  );
}
