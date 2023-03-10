import { GlobalState } from "../context/globalState";
import { useContext } from 'react';


export const useGlobalState = () => {
    const context = useContext(GlobalState);

    if (!context) {
        throw Error('useAuthContext should be inside AuthContextProvider')
    }

    return context
}