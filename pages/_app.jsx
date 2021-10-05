import React from 'react';
import {Provider} from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';
import {RecoilRoot} from 'recoil'

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