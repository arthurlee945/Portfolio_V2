import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";
import { AnimatePresence, LazyMotion, domAnimation, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}
const Main = styled(motion.main)`
  max-width: 1920px;
  margin: 0px auto;
`;

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} mode="wait">
          <Fragment key={router.asPath}>
            <Main
              id="main"
              initial={{  opacity: 0 }}
              animate={{ opacity: 1, transitionEnd: {  opacity: 1 } }}
              exit={{ y: "5%", opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {children}
            </Main>
            <Footer />
          </Fragment>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default Layout;
