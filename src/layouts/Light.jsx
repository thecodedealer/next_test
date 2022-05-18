/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const LightTheme = ({ children }) => {
  React.useEffect(() => {
    window.theme = "light";
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/light.css" />
      </Head>
      {children}
    </>
  );
};

export default LightTheme;
