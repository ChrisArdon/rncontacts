import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const Container = ({style, children}) => { //we add style for if we want to change the style of an specific screen
    return(
        <ScrollView style={[styles.wrapper, style]}>{children}</ScrollView>
    );
}

export default Container;