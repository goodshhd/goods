import React from 'react';

import 'tailwindcss/tailwind.css';

import {RecoilRoot} from 'recoil';
import {Provider} from 'next-auth/client';

import PropTypes from 'prop-types';

const App = ({Component, pageProps}) => {
    return (
        <Provider
            options={{
                clientMaxAge: 0,
                keepAlive: 0
            }}
            session={pageProps.session}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </Provider>
    );
};

export default App;

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

App.defaultProps = {
    Component: () => {},
    pageProps: {}
}