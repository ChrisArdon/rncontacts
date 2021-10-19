import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from "react-native";
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routeNames";
import Contacts from "../screens/Contacts/index";
import ContactDetail from "../screens/ContactDetail/index";
import CreateContact from "../screens/CreateContact/index";
import Settings from '../screens/Settings/index';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator initialRouterName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;