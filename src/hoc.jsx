import React from 'react';
import Router from 'next/router';
import useUserContext from './hoc';

const login = '/login'; 

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
  const { user } = useUserContext();
  hocComponent.getInitialProps = async (context) => {
    
    if (!user) {
        Router.replace(login);
      
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context});
      return { ...wrappedProps };
    }

    return { };
  };

  return hocComponent;
};