import React,{useState} from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { FastField, Formik } from "formik";
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

import DateTimePicker from '@react-native-community/datetimepicker';

//colors

const { brand,darkLight,primary } = Colors;

//icons

import { Octicons,Ionicons,AntDesign} from '@expo/vector-icons';


const Signup = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000,0,1));

    const [dob, setdob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setdob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }
    var diff_ms = Date.now() - dob;
    var age_dt = new Date(diff_ms); 
    var yr = age_dt.getUTCFullYear();
    var age = Math.abs(yr - 1970);

    return (
        <ScrollView>
            <StyledContainer>
                <InnerContainer>
                    <PageTitle>Buddy</PageTitle>
                    <SubTitle>Signup</SubTitle>
                    {show && (
                        <DateTimePicker
                            textID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    <Formik initialValues={{ fname: '', email: '', DOB: '', password: '', confirmPassword: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
                            <MyTextInput
                                label="Full Name"
                                icon="person"
                                placeholder="Vigneshwar"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                            />
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
                                label="Date of Birth"
                                icon="calendar"
                                placeholder="yyyy--MM-DD"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('DOB')}
                                onBlur={handleBlur('DOB')}
                                value={dob ?age.toString():" "}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatePicker}
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
                            <MyTextInput
                                label="confirm Password"
                                icon="lock"
                                placeholder="* * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Sign up
                                </ButtonText>
                            </StyledButton>
                            <Line/>
                            <ExtraView>
                                <ExtraText> Already have an account?</ExtraText>
                                <TextLink>
                                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}><TextLinkContent>Sign in</TextLinkContent></TouchableOpacity>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>}
                    </Formik>
                </InnerContainer>
                </StyledContainer>
            </ScrollView>
    );
};

const MyTextInput = ({ label, icon,isDate,showDatePicker,...props }) => {
    return (
        <View>
            <LeftIcon>
            <Octicons name={icon} size={24} color={brand} /> 
                {/* <AntDesign name="calendar" size={24} color="black"/> */}
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}><StyledTextInput {...props} /></TouchableOpacity>}

        </View>
    )
}

export default Signup;