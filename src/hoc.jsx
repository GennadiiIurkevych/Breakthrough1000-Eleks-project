import React from 'react';
import Router from 'next/router';

const login = '/login=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  return { auth: null }; // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
  const userAuth = await checkUserAuthentication();
  hocComponent.getInitialProps = async (context) => {
    

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      
        Router.replace(login);
      
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }
  

    return { userAuth };
  };


  return hocComponent;

};