import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Login = () => {
    return(
        <View>
            <Text> Hi from Login</Text>
        </View>
    );
}

const SignUp = () => {
    return(
        <View>
            <Text> Hi from SignUp</Text>
        </View>
    );
}


const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Login' component={Login}></Drawer.Screen>
            <Drawer.Screen name='Register' component={SignUp}></Drawer.Screen>
        </Drawer.Navigator>
    );
}