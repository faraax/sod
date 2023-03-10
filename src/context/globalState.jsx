import { createContext, useReducer } from "react";


export const GlobalState = createContext();

const initialState = {
    user: null,
    authIsReady: false,
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
        case "UPDATEFORMDB":
            return { form: action.payload }
        case "RESET_STATE":
            return initialState;
        default:
            return state
    }
}

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState)
    return (
        <GlobalState.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalState.Provider>
    )
}