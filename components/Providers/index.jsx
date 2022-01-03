import React from "react";

import PropTypes from "prop-types";

import { RecoilRoot } from "recoil";
import { Provider } from "next-auth/client";
import { ToastProvider } from "react-toast-notifications";

const Providers = ({ children, pageProps }) => (
  <Provider
    options={{
      clientMaxAge: 0,
      keepAlive: 0,
    }}
    session={pageProps.session}
  >
    <RecoilRoot>
      <ToastProvider autoDismiss autoDismissTimeout={3000}>
        {children}
      </ToastProvider>
    </RecoilRoot>
  </Provider>
);

Providers.propTypes = {
  children: PropTypes.node,
  pageProps: PropTypes.object,
};

export default Providers;
