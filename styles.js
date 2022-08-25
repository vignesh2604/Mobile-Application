import styled from "styled-components";
import { View,Image,Text,TextInput,TouchableOpacity } from "react-native";
import  Constants  from "expo-constants";
//colors for our page

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#108981',
    red: '#EF4444'
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px; 
    background-color: ${primary};

`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width:250px;
    height:200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary}; 
`;

export const StyledFormArea = styled.View`
    width: 100%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 15px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 40px;
    position: absolute;
    z-index: 1;
`;


export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items:center;
    ${props => props.google == true && `
    background-color:${green};
    flex-direction:row;
    justify-content:center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${props => props.google == true && `
        padding: 5px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 17px;
    color:${props => props.type == 'SUCCESS' ? green : red};
`;

export const FinalAns = styled.Text`
    text-align: center;
    font-size: 25px;
    color:${green};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items:center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    color: ${tertiary};
    align-content: center;
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items:center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;