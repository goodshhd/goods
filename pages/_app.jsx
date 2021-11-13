import React from "react";

import "tailwindcss/tailwind.css";

import PropTypes from "prop-types";

import { appWithTranslation } from "next-i18next";
import Providers from "../components/Providers";

const App = ({ Component, pageProps }) => (
  <Providers pageProps={pageProps}>
    <Component {...pageProps} />
  </Providers>
);

export default appWithTranslation(App);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  Component: () => {},
  pageProps: {},
};
