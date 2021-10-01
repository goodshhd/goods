import React from 'react';
import {Provider} from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';

const App = ({Component, pageProps}) => {
    return (
        <Provider
            options={{
                clientMaxAge: 0,
                keepAlive: 0
            }}
            session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};