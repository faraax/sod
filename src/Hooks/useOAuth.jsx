import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useGlobalState } from "./useGlobalState";
import { toast } from 'react-toastify';
import { redirect } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";

const config = {
    appId: process.env.REACT_APP_ID_BING,
    redirectUrl: process.env.REACT_APP_HOMEPAGE,
    // appId: "18bc2b85-477f-4398-a26d-f954ff10e263",
    // redirectUrl: "https://toolbox.steveondigital.com/",
    scopes: [
        'user.read'
    ],
    // authority: "f8cdef31-a31e-4b4a-93e4-5f571e91255a"
}

export default function useLogin() {
    const [signupUser, setSignupUser] = useState(false);
    const [bingSignupUser, setBingSignupUser] = useState(false);
    const [signupUserInfo, setSignupUserInfo] = useState(false);
    const [loginUser, setLoginUser] = useState(false);
    const { dispatch, user } = useGlobalState();
    const token = Cookies.get('sodIdToken');

    const microsoftAuth = new PublicClientApplication({
        auth: {
            clientId: config.appId,
            redirectUri: config.redirectUrl
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: true
        }
    })
    // microsoftAuth.getAccountByHomeId

    // Microsoft Login
    const microsoftLogin = async (url) => {
        try {
            const login = await microsoftAuth.loginPopup({
                scopes: config.scopes,
                prompt: "select_account"
            })
            Cookies.set("sodIdToken", login.accessToken);
            setBingSignupUser(false)
        } catch (err) {
            console.log(err);
        }
        let headersList = {
            "ngrok-skip-browser-warning": true,
            "Authorization": `Bearer ${Cookies.get('sodIdToken')}`
        }
        let reqOptions = {
            url,
            method: "GET",
            headers: headersList,
        }
        try {
            let response = await axios.request(reqOptions);
            dispatch({ type: "LOGIN", payload: response.data });
            toast.success(`Welcome : ${user.data.name}`, {
                position: "bottom-right",
                autoClose: 1000,
                closeOnClick: true,
                progress: true,
                theme: "colored",
            });
        } catch (err) {
            toast.error(err.response.data.message, {
                position: "bottom-right",
                autoClose: 1000,
                closeOnClick: true,
                progress: true,
                theme: "colored",
            });
            console.log(err);
        }
    }

    const microsoftSignup = async () => {
        try {
            const login = await microsoftAuth.loginPopup({
                scopes: config.scopes,
                prompt: "select_account"
            })
            Cookies.set("sodIdToken", login.accessToken);
            console.log(login);
            setBingSignupUser(true)
            setSignupUserInfo({ tenantId: login.account.tenantId, username: login.account.username, name: login.account.name, uniqueId: login.uniqueId })
        } catch (err) {
            console.log(err);
        }
    }

    const notify = () => toast.warn("Please Login First", {
        position: "bottom-right",
        autoClose: 1000,
        // hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: true,
        theme: "colored",
    })

    const notifyHome = () => toast.info("Logout to visit Home Page", {
        position: "bottom-right",
        autoClose: 5000,
        // hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        progress: true,
        theme: "colored",
    })

    const handleLogout = () => {
        googleLogout()
        // microsoftAuth.logoutRedirect()
        Cookies.remove("sodIdToken");
        dispatch({ type: "LOGOUT" });
        // navigate('/')
        redirect('/')
        setLoginUser(false)
        window.location.href = '/'
        // window.location.reload(true);
    }

    // Login
    const handleOAuth = useGoogleLogin({
        onSuccess: async respose => {
            try {
                await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`,
                    }
                })
                setLoginUser(true)
                Cookies.set("sodIdToken", respose.access_token);
            } catch (err) {
                Cookies.remove("sodIdToken");
                console.log(err);
            }
        }
    });

    // Signup
    const handleSignup = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`,
                    }
                })
                setSignupUser(true)
                setSignupUserInfo(res.data);
                Cookies.set("sodIdToken", respose.access_token);
            } catch (err) {
                Cookies.remove("sodIdToken");
                console.log(err);
            }
        }
    });

    useEffect(() => {
        const login = async (url) => {
            setLoginUser(false)
            let headersList = {
                "ngrok-skip-browser-warning": true,
                "Authorization": `Bearer ${token}`
            }
            let reqOptions = {
                url,
                method: "GET",
                headers: headersList,
            }
            try {
                let response = await axios.request(reqOptions);
                dispatch({ type: "LOGIN", payload: response.data });
                toast.success(`Welcome : ${user.data.name}`, {
                    position: "bottom-right",
                    autoClose: 1000,
                    closeOnClick: true,
                    progress: true,
                    theme: "colored",
                });
            } catch (err) {
                toast.error(err.response.data.message, {
                    position: "bottom-right",
                    autoClose: 1000,
                    closeOnClick: true,
                    progress: true,
                    theme: "colored",
                });
                console.log(err);
            }
        }

        const signup = async (url) => {
            setSignupUser(false)
            let headersList = {
                "ngrok-skip-browser-warning": true,
                "Authorization": `Bearer ${token}`
            }
            let reqOptions = {
                url,
                method: "POST",
                headers: headersList,
                data: JSON.stringify(signupUserInfo)
            }
            try {
                let response = await axios.request(reqOptions);
                // dispatch({ type: "LOGIN", payload: response.data });
                // console.log("Resp =>", response.data);
                toast.success(`Welcome : ${response.data.message} Please Login`, {
                    position: "bottom-right",
                    autoClose: 1000,
                    // hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    // draggable: true,
                    // progress: true,
                    theme: "colored",
                });
            } catch (err) {
                // Cookies.remove("sodIdToken");
                if (err.response.data.message) {
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 1000,
                        // hideProgressBar: false,
                        closeOnClick: true,
                        // pauseOnHover: true,
                        // draggable: true,
                        progress: true,
                        theme: "colored",
                    });
                }
                console.log(err);
            }
        }

        const micrsoftSignup = async (url) => {
            setBingSignupUser(false)
            let headersList = {
                "ngrok-skip-browser-warning": true,
                "Authorization": `Bearer ${token}`
            }
            let reqOptions = {
                url,
                method: "POST",
                headers: headersList,
                data: JSON.stringify(signupUserInfo)
            }
            try {
                let response = await axios.request(reqOptions);
                // dispatch({ type: "LOGIN", payload: response.data });
                // console.log("Resp =>", response.data);
                toast.success(`Welcome : ${response.data.message} Please Login`, {
                    position: "bottom-right",
                    autoClose: 1000,
                    // hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    // draggable: true,
                    // progress: true,
                    theme: "colored",
                });
            } catch (err) {
                // Cookies.remove("sodIdToken");
                if (err.response.data.message) {
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 1000,
                        // hideProgressBar: false,
                        closeOnClick: true,
                        // pauseOnHover: true,
                        // draggable: true,
                        progress: true,
                        theme: "colored",
                    });
                }
                console.log(err);
            }
        }

        if (loginUser) {
            login(`${process.env.REACT_APP_API}/login`)
        }

        if (bingSignupUser) {
            micrsoftSignup(`${process.env.REACT_APP_API}/signup-bing`)
            // login(`${process.env.REACT_APP_API}/login`)
        }

        if (signupUser) {
            signup(`${process.env.REACT_APP_API}/signup`)
        }
    }, [token, loginUser, signupUser, dispatch, signupUserInfo, user, bingSignupUser])

    return { notify, notifyHome, handleLogout, handleOAuth, handleSignup, microsoftLogin, microsoftSignup }
}
