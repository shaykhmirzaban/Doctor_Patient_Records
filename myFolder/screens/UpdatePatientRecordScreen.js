import {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// firebase
import database from '@react-native-firebase/database';

// css
import Style from '../boilerplate/globalStyle';

function UpdatePatientRecordScreen({navigation, route}) {
  let [data, setData] = useState(route.params);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let datePick = String(date).slice(0, 10);
    setDate(datePick);
    setData({...data, date: datePick});
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm1 = time => {
    let TimePicker = String(time).slice(15, 24);
    setTime(TimePicker);
    setData({...data, time: TimePicker});
    hideTimePicker();
  };

  const navigate = name => {
    navigation.navigate(name);
  };

  const updateDataFn = async () => {
    if (data && data.name && data.time) {
      try {
        let key = await AsyncStorage.getItem('id');
        database()
          .ref(`PatientRecord/${key}/${data.id}`)
          .update(data)
          .then(() => {
            ToastAndroid.show('Successfully updated', ToastAndroid.SHORT);
            navigate('PatientDetail');
          })
          .catch(() => {
            ToastAndroid.show('Something is wrong', ToastAndroid.SHORT);
          });
      } catch (error) {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show(
        'Please fill all field before move agao',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#EFFAFF',
        padding: 20,
      }}>
      <View>
        {/* patient name */}
        <TextInput
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#84C3E2',
            borderRadius: 10,
            paddingLeft: 20,
            fontSize: 16,
            marginVertical: 10,
            color: '#fff',
          }}
          placeholderTextColor="#fff"
          placeholder="Patient Name"
          keyboardType="default"
          value={data && data.name}
          onChangeText={e => setData({...data, name: e})}
        />
        {/* patient disease */}
        <TextInput
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#84C3E2',
            borderRadius: 10,
            paddingLeft: 20,
            fontSize: 16,
            marginVertical: 10,
            color: '#fff',
          }}
          placeholderTextColor="#fff"
          placeholder="Patient Disease"
          keyboardType="default"
          value={data && data.disease}
          onChangeText={e => setData({...data, disease: e})}
        />
        <View style={{flexDirection: 'row', width: '100%'}}>
          {/* date picker */}
          <View>
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                width: 130,
                height: 70,
                backgroundColor: '#84C3E2',
                borderRadius: 10,
                paddingLeft: 20,
                fontSize: 16,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Date Picker
              </Text>
              {date && (
                <View style={{paddingVertical: 5}}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    {date}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          {/* time picker */}
          <View>
            <TouchableOpacity
              onPress={showTimePicker}
              style={{
                width: 130,
                height: 70,
                backgroundColor: '#84C3E2',
                borderRadius: 10,
                paddingLeft: 20,
                fontSize: 16,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Time Picker
              </Text>
              {time && (
                <View style={{paddingVertical: 5}}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    {time}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm1}
              onCancel={hideTimePicker}
              is24Hour={false}
            />
          </View>
        </View>
      </View>
      {/* button Part */}
      <TouchableOpacity
        onPress={updateDataFn}
        style={[Style.button, {width: '100%'}]}>
        <Text style={[Style.buttonText]}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default UpdatePatientRecordScreen;
