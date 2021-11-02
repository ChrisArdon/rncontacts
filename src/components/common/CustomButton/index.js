import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

// This component returns a label and the textInput field

const CustomButton = ({title, secondary, primary, danger, disabled, loading, onPress}) => {
    const [focused, setFocused] = useState(false); //To focused on the input we are writting in at the moment

    const getBgColor = () => {
        if(disabled){
            return colors.grey;
        }
        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        }
        if(secondary){
            return colors.secondary;
        }
    }
    return (
        <TouchableOpacity disabled={disabled} style={[styles.wrapper,{backgroundColor:getBgColor()}]}>
            <View style={[styles.loaderSection]}>
                {loading&&<ActivityIndicator color={primary?colors.secondary:colors.primary}></ActivityIndicator>}
                {title && <Text style={{color:disabled?'black':colors.white,paddingLeft:loading?5:0}}>{title}</Text>}
            </View>            
        </TouchableOpacity>
    )
}

export default CustomButton;
