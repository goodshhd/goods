import React from 'react';

const useEmailCutter = inputEmail => {

    const email = inputEmail.substring(0, inputEmail.lastIndexOf('@'));

    return { email }
};

export default useEmailCutter;