import {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// css
import Style from '../boilerplate/globalStyle';

// firebase
import database from '@react-native-firebase/database';

function ProfileUpdateScreen({route, navigation}) {
  let [data, setData] = useState(route.params.name);

  const navigate = name => {
    navigation.navigate(name);
  };

  // update fn
  const updateFn = async () => {
    try {
      let userKey = await AsyncStorage.getItem('id');
      database()
        .ref(`users/${userKey}`)
        .update({...route.params, name: data})
        .then(() => {
          ToastAndroid.show('Data successfully updated', ToastAndroid.SHORT);
          navigate('ProfileScreen');
        })
        .catch(() => {
          ToastAndroid.show('something is wrong', ToastAndroid.SHORT);
        });
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
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
          value={data}
          keyboardType="default"
          onChangeText={e => setData(e)}
        />
      </View>
      {/* button Part */}
      <TouchableOpacity
        onPress={updateFn}
        style={[Style.button, {width: '100%'}]}>
        <Text style={[Style.buttonText]}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ProfileUpdateScreen;
