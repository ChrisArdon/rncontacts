import React, {createContext, useReducer} from "react"
import Contacts from "../screens/Contacts";
import authInitialState from "./initialStates/authState";
import contactInitialState from "./initialStates/contactInitialState";
import auth from "./reducers/auth";

export const GlobalContext = createContext({});
const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(Contacts, contactInitialState);
    return(
        <GlobalContext.Provider value={{authState, contactsState, authDispatch, contactsDispatch}}>{children}</GlobalContext.Provider>
    );
}

export default GlobalProvider;