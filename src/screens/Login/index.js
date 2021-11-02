import React from "react";
import { View, Text } from 'react-native';
import Container from '../../components/common/Container/index';
import Input from "../../components/common/Input";
import CustomButton from "../../components/common/CustomButton";

const Login = () => {
    const [value, onChangeText] = React.useState("");
    return(
        <Container>             
            <Input 
            label='Username'
            onChangeText={(text) => onChangeText(text)} 
            value={value}
            iconPosition="right"
            //error={'This field is required'}
            ></Input>
            <Input 
            label='Password'
            onChangeText={(text)=>onChangeText(text)} 
            value={value} 
            icon={<Text>HIDE</Text>}
            iconPosition="right"></Input>

            <CustomButton secondary title='submit' loading={true} disable={true} ></CustomButton>
            <CustomButton secondary loading title='Click Me'></CustomButton>
            <CustomButton primary title='submit' loading={true} disable={true}></CustomButton>
            <CustomButton danger title='submit'></CustomButton>
        </Container>
    );
}


export default Login;