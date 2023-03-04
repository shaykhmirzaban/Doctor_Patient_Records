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

// css
import Style from '../boilerplate/globalStyle';

// firebase
import database from '@react-native-firebase/database';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function AddPatientRecordScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  let [date, setDate] = useState();
  let [time, setTime] = useState();
  let [data, setData] = useState({name: '', disease: ''});
  let [usetId, setUserId] = useState();

  let userKey = async () => {
    let userId = await AsyncStorage.getItem('id');
    setUserId(userId);
  };
  userKey();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let datePick = String(date).slice(0, 10);
    setDate(datePick);
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
    hideTimePicker();
  };

  // reset all
  const resetFn = () => {
    setData({name: '', disease: ''});
    setDate();
    setTime();
  };

  const addPatientFn = () => {
    data.date = date;
    data.time = time;
    let key = database().ref(`PatientRecord/${usetId}/`).push().key;
    data.id = key;
    database()
      .ref(`PatientRecord/${usetId}/${key}`)
      .set(data)
      .then(() => {
        ToastAndroid.show('Successfully data is store', ToastAndroid.SHORT);
        resetFn();
      })
      .catch(() => {
        ToastAndroid.show('Something is wrong', ToastAndroid.SHORT);
      });
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
            />
          </View>
        </View>
      </View>
      {/* button Part */}
      <TouchableOpacity
        onPress={addPatientFn}
        style={[Style.button, {width: '100%'}]}>
        <Text style={[Style.buttonText]}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default AddPatientRecordScreen;
