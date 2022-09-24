
import Router from 'next/router';
//import useUserContext from './hoc';
import React, { useEffect } from 'react';
import { useUserContext } from './contexts/UserContext';

const login = '/login'; 


  const WrappedComponent = ({children}) => {
     const {user} = useUserContext();
    
     useEffect(() => {
         if (!user) {
    Router.replace(login);
    }
  }, [user])

};

const withLogin = Component => ({...props}) => (<WrappedComponent>
   <Component {...props} />
   </WrappedComponent>);

export default withLogin;