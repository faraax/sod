import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useGlobalState } from "./useGlobalState";
import { toast } from 'react-toastify';

export default function useLogin() {
    const [signupUser, setSignupUser] = useState(false);
    const [signupUserInfo, setSignupUserInfo] = useState(false);
    const [loginUser, setLoginUser] = useState(false);
    const { dispatch, user } = useGlobalState();
    const token = Cookies.get('sodIdToken');

    const notify = () => toast.warn("Please Login First", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: true,
        theme: "colored",
    })

    const notifyHome = () => toast.info("Logout to visit Home Page", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: true,
        theme: "colored",
    })

    const handleLogout = () => {
        googleLogout()
        dispatch({ type: "LOGOUT" });
        Cookies.remove("sodIdToken");
    }

    // Login
    const handleOAuth = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
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
                // console.log("Resp=>", response.data);
                toast.success(`Welcome : ${user.data.name}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    theme: "colored",
                });
            } catch (err) {
                // Cookies.remove("sodIdToken");
                toast.error(err.response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    theme: "colored",
                });
                console.log(err.response.data.message);
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
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    theme: "colored",
                });
            } catch (err) {
                // Cookies.remove("sodIdToken");
                if (err.response.data.message) {
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
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

        if (signupUser) {
            signup(`${process.env.REACT_APP_API}/signup`)
        }
    }, [token, loginUser, signupUser])

    return [notify, notifyHome, handleLogout, handleOAuth, handleSignup]
}
