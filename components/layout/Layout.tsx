import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence, LazyMotion, domAnimation, motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}
const Main = styled(motion.main)`
  max-width: 1920px;
  margin: 0px auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const navMenuClose = () => {
      const dropdownMenu = document.getElementById("route_container");
      const dropdownBtn = document.getElementById("dropdown-btn");
      dropdownMenu?.setAttribute("aria-hidden", "true");
      dropdownBtn?.setAttribute("aria-pressed", "false");
    };
    const handleRouteChangeStart = (url: string) => {
      if (url !== router.asPath) {
        navMenuClose();
      }
    };
    const handleRouteChangeEnded = () => {};
    const handleRouteChangeError = (err: string) => {
      console.error(err);
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnded);
    router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnded);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);
  return (
    <>
      <Header />

      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} mode="wait">
          <Main
            id="main"
            key={router.asPath}
            initial={{ y: "-5%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "5%", opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </Main>
        </AnimatePresence>
      </LazyMotion>

      <Footer />
    </>
  );
};

export default Layout;
