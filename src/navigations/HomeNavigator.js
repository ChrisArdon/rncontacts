import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Contacts = () => {
    return(
        <View>
            <Text> Hi from Contacts</Text>
        </View>
    );
}

const ContactDetail = () => {
    return(
        <View>
            <Text> Hi from ContactDetail</Text>
        </View>
    );
}

const CreateContact = () => {
    return(
        <View>
            <Text> Hi from CreateContact</Text>
        </View>
    );
}

const Settings = () => {
    return(
        <View>
            <Text> Hi from Settings</Text>
        </View>
    );
}

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Contacts' component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name='Contact Detail' component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name='Create Contact' component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name='Settings' component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}