import React,{useState} from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

//API for backend

import axios from 'axios';

//colors

const { brand,darkLight,primary } = Colors;

//icons

import { Octicons,Ionicons,AntDesign} from '@expo/vector-icons';


const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setmsg] = useState();
    const [msgType, setmsgType] = useState();
    
    //Backend connectivity
    const handleMessage = (message, type = "FAILED") => {
        setmsg(message);
        setmsgType(type);
    };

    const handleSignin = (values, setSubmitting) => {
        handleMessage(null);
        const url = 'http://192.168.142.27:3000/user/signin';

        axios.post(url, values).then((response) => {
            const result = response.data;
            const message = result.message;
            const status = result.status;
            const data = result.data;
            console.log(result);
            if (status == 'FAILED') {
                handleMessage(message, status);
            }
            else {
                navigation.navigate('Home', { ...data[0] });
            }
            setSubmitting(false);
        }).catch((error) => {
            console.log(error);
            setSubmitting(false);
            handleMessage('An error occurred.. Check your network and try again.');
        });
    };

     return (
        <StyledContainer>
            <InnerContainer>
                <PageTitle>Buddy</PageTitle>
                <SubTitle>Login</SubTitle>
                <Formik initialValues={{ email: '', password: '' }}
                    onSubmit={(values,{setSubmitting}) => {
                        if (values.email == '' || values.password == '')
                        {
                            handleMessage('Please fill all the fields..');
                            setSubmitting(false);
                        }
                        else
                        {
                            handleSignin(values, setSubmitting);
                        }
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="vid234@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType='email-address'
                        />
                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox type={msgType}>{ message }</MsgBox>
                        {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>)}

                        {isSubmitting && (<StyledButton disabled={true}>
                            <ActivityIndicator size="large" color={primary}></ActivityIndicator>
                        </StyledButton>)}
                        <Line/>
                        <StyledButton google={true} onPress={handleSubmit}>
                            <AntDesign name="google" size={24} color={primary} />
                            <ButtonText google={true}>
                                Sign in with google
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText> Don't have an account?</ExtraText>
                            <TextLink>
                                <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}><TextLinkContent>Sign up</TextLinkContent></TouchableOpacity>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon,...props }) => {
    return (
        <View>
            <LeftIcon>
            <Octicons name={icon} size={24} color={brand} /> 
                {/* <AntDesign name="calendar" size={24} color="black"/> */}
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}

export default Login;