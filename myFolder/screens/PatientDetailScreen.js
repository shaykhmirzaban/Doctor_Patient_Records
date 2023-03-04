import {useState} from 'react';
import {Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// firebase
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


function PatientDetailScreen({navigation, route}) {
  let [data, setData] = useState(route.params);

  const navigate = (name, val) => {
    navigation.navigate(name, val);
  };

  const deleteFn = async () => {
    try {
      let id = await AsyncStorage.getItem('id');
      database()
        .ref(`PatientRecord/${id}/${data.id}`)
        .remove()
        .then(() => {
          ToastAndroid.show('Successfully deleted', ToastAndroid.SHORT);
          navigate('HomeScreen');
        })
        .catch(() => {
          ToastAndroid.show('Something is wrong', ToastAndroid.SHORT);
        });
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EFFAFF',
      }}>
      <View
        style={{
          width: '90%',
          backgroundColor: '#CEEEFF',
          padding: 20,
          borderRadius: 20,
          marginVertical: 30,
        }}>
        {/* user icon */}
        <View>
          <View
            style={{
              backgroundColor: '#EFFAFF',
              width: 55,
              height: 55,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="person" size={35} color="#84C3E2" />
          </View>
        </View>
        {/* detail */}
        <View style={{marginVertical: 10}}>
          {/* heading */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: 10,
              color: '#333',
            }}>
            Detail:
          </Text>
          {/* name */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Name: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.name}
            </Text>
          </View>
          {/* Disease: */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Disease: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.disease}
            </Text>
          </View>
          {/* date: */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Date: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.date}
            </Text>
          </View>
          {/* Time */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Time: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.time}
              {/* {`${hour}${prepand}`} */}
            </Text>
          </View>
        </View>
        {/* edit */}
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingVertical: 10,
              color: '#333',
            }}>
            Edited:
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* update */}
            <TouchableOpacity
              onPress={() => navigate('UpdatePatientRecordScreen', data)}
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#1FBC4B',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingRight: 10,
                }}>
                Edit
              </Text>
              <Icon name="edit" size={25} color="#FFFFFF" />
            </TouchableOpacity>
            {/* delete */}
            <TouchableOpacity
              onPress={deleteFn}
              style={{
                width: 120,
                height: 40,
                backgroundColor: '#FF5252',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingRight: 10,
                }}>
                Delete
              </Text>
              <Icon name="delete" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PatientDetailScreen;
