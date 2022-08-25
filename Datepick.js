import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';


export default function Datepick() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  var diff_ms = Date.now() - date;
  var age_dt = new Date(diff_ms); 
  var yr = age_dt.getUTCFullYear();
  var age = Math.abs(yr - 1970);
    
  return (
      <View style={styles.container}>
          <FontAwesome name="calendar" size={24} color="purple" />
          <TouchableOpacity onPress={ showDatepicker} style={{ position:'absolute',right:300,height: 20, marginTop: 10 }}>
            <Text>DOB</Text>
          </TouchableOpacity>
            <Text style={{lineHeight:50}}>Age: {age}</Text>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    },
    button: {
        flexDirection: 'row',
        height: 50,
    }
});




// import React from 'react';
// import Cal from './components/calendar';

// export default function App() {
//   return(<Cal></Cal>);
// }
