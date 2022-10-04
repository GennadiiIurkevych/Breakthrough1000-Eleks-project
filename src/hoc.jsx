
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useUserContext } from './contexts/UserContext';

const login = '/login';

const WrappedComponent = ({ children }) => {
  const { user } = useUserContext();

  useEffect(() => {
    if (!localStorage?.getItem?.('wasLoggedIn') && !user) {
      Router.replace(login);
    }
  }, [user])

  return <>{children}</>
};

const withLogin = Component => ({ ...props }) => (<WrappedComponent>
  <Component {...props} />
</WrappedComponent>);

export default withLogin;