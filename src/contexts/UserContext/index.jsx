import React, { useContext, useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import jwt_decode from "jwt-decode";

const defaultValue = {
    user: null,
    setUser: () => {},
    logout: () => {},
};

const UserContext = React.createContext(defaultValue);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [allowRender, setAllowRender] = useState(false);

    //////////////////////////////
    function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        setUser(userObject);
    }

    useEffect(() => {
        /*global google */
        google.accounts.id.initialize({
            client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}.apps.googleusercontent.com`,
            callback: handleCallbackResponse,
            auto_select: true,
        });

        google.accounts.id.prompt(() => {
            setAllowRender(true);
        });
    }, []);

    if (!allowRender) {
        return null;
    }

    return (
        <UserContext.Provider
            value={{
                setUser,
                user,
                logout: () => {
                    setUser(null);
                    google.accounts.id.revoke();
                },
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
