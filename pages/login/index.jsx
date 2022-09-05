import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useUserContext } from "../../src/contexts/UserContext";
import Header from "../../src/components/Header";
import styles from '../../styles/Home.module.css';
//import { useNavigate } from 'next/router'

const Login = () => {
    const { user, logout } = useUserContext();

    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);

    useEffect(() => {
        if (!user) {
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            );
        }
    }, [user]);
    // If we have no user: sign in button
    // If we have a user: show the log out button
    return (
        <>
            <Header keywords={Login} />
            {/* <button onClick={goBack}>Go Back</button> */}
            <div className={styles.container}>
                <Box
                    width="100vw"
                    height="100vh"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                >
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                        flexDirection="column"
                    >
                        {!user && <Box id="signInDiv"></Box>}
                        {user && (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                mb={2}
                            >
                                {user?.picture && <img src={user?.picture}></img>}
                                <Typography variant="h3">{user?.name}</Typography>
                            </Box>
                        )}

                        {user && (
                            <Button variant="contained" onClick={logout}>
                                Sign Out
                            </Button>
                        )}
                    </Box>
                </Box>
            </div>
        </>
    );
};
export default Login;
