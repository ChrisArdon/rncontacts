import React, {useContext} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Priovider";

const AppNavContainer = () =>{
    const {authState:{isLoggedIn}} = useContext(GlobalContext); //we give the context we want to check
    console.log('isLoggedIn :>> ', isLoggedIn);

    return(
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator></DrawerNavigator> : <AuthNavigator></AuthNavigator>}
        </NavigationContainer>
    );
}

export default AppNavContainer;