import { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import axios from "axios";


export const GlobalState = createContext();

const initialState = {
    user: null,
    authIsReady: false,
    canvas_name: null,
    form:
    {
        KeyPartnerships: {
            list: []
        },
        KeyActivities: {
            list: []
        },
        ValuePropositions: {
            list: []
        },
        CustomerRelationships: {
            list: []
        },
        CustomerSegments: {
            list: []
        },
        Channels: {
            list: []
        },
        KeyResources: {
            list: []
        },
        RevenueStreams: {
            list: []
        },
        CostStructure: {
            list: []
        },
        BrainstormingNotes: {
            list: []
        },
    }
}

export const stateReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null, authIsReady: false }
        case "AUTH_IS_READY":
            return { ...state, user: action.payload, authIsReady: true }
        case "UPDATEFORM":
            return { ...state, form: action.payload }
        case "UPDATECANVASNAME":
            return { ...state, canvas_name: action.payload }
        case "RESET_STATE":
            return { ...state, form: initialState.form };
        default:
            return state
    }
}

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState)
    const token = Cookies.get('sodIdToken');


    const authIsReady = async () => {
        if (token) {
            let headersList = {
                "ngrok-skip-browser-warning": true,
                "Authorization": `Bearer ${token}`
            }
            let reqOptions = {
                url: `${process.env.REACT_APP_API}/login`,
                method: "GET",
                headers: headersList,
            }
            try {
                let response = await axios.request(reqOptions);
                // dispatch({ type: "LOGIN", payload: response.data });
                dispatch({ type: "AUTH_IS_READY", payload: response.data });
            } catch (err) {
                Cookies.remove("sodIdToken");
                console.log(err.response.data.message);
            }
        } else {
            dispatch({ type: "AUTH_IS_READY" });
        }
    }

    useEffect(() => {
        authIsReady()
    }, [])


    return (
        <GlobalState.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalState.Provider>
    )
}