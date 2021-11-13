import React from "react";

import { RecoilRoot } from "recoil";
import { Provider } from "next-auth/client";
import PropTypes from "prop-types";

const Providers = ({ children, pageProps }) => (
  <Provider
    options={{
      clientMaxAge: 0,
      keepAlive: 0,
    }}
    session={pageProps.session}
  >
    <RecoilRoot>{children}</RecoilRoot>
  </Provider>
);

Providers.propTypes = {
    children: PropTypes.node,
    pageProps: PropTypes.object
};

export default Providers;