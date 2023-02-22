import Head from "next/head";
import { FC } from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

const Seo: FC<SeoProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>Arthur Lee | Developer</title>
      <meta name="description" content="Arthur Lee Portfolio Homepage" />
      <meta name="keywords" content="seo tips" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
