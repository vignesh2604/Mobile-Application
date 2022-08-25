import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const Home = ({ navigation, route }) => {
  
  const name = route.params.name;


  return (
    <View style={styles.box}>
      <Text>Home page</Text>
      <Text>
        {name}
      </Text>
      <Button style ={{alignItems:"center"}} title="Login" onPress={() => { navigation.navigate('Login') }} />
    </View>
    
  );
};


var styles = StyleSheet.create(
  {
    box: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
);


export default Home;


//<Button title="Go back" onPress={() => { navigation.goBack() }}/>