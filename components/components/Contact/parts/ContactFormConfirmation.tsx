import { m } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

interface CFCProps {
  successful: boolean;
}

const ContactFormConfirmation: FC<CFCProps> = ({ successful }) => {
  return (
    <m.div key="confirmation-card" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
      {successful ? "successful" : "try again"}
    </m.div>
  );
};

export default ContactFormConfirmation;
