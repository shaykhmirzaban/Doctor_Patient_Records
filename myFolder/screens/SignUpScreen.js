import {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

// firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// css
import Style from '../boilerplate/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUpScreen({navigation}) {
  let [data, setData] = useState({});
  let [flag, setFlag] = useState(false);

  const navigate = name => {
    navigation.navigate(name);
  };

  // sign up
  const createUser = () => {
    setFlag(true);
    if (data && data.name && data.email && data.password) {
      auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(userCredential => {
          // Signed in
          var user = userCredential.user;
          const setData = async () => {
            try {
              await AsyncStorage.setItem('id', user.uid);
            } catch (error) {
              console.log(error);
            }
          };
          setData();
          // data store in firebase database
          database()
            .ref(`users/${user.uid}`)
            .set({...data, id: user.uid})
            .then(() => {
              ToastAndroid.show('Successfully sign up', ToastAndroid.SHORT);
              navigate('HomeScreen');
            })
            .catch(() => {
              ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
            });

          setFlag(false);
        })
        .catch(error => {
          var errorMessage = error.message;
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
          setFlag(false);
        });
    } else {
      setFlag(false);
      ToastAndroid.show('Fill all field before move agao', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
      }}
      style={{
        backgroundColor: '#EFFAFF',
        padding: 25,
      }}>
      {/* top Part */}
      <View style={{marginVertical: 10}}>
        {/* heading */}
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#009ABC', fontSize: 30, fontWeight: 'bold'}}>
            Sign Up
          </Text>
        </View>
        {/* form */}
        <View style={{marginVertical: 20}}>
          <TextInput
            style={{
              width: '100%',
              height: 70,
              backgroundColor: '#84C3E2',
              borderRadius: 10,
              paddingLeft: 20,
              fontSize: 16,
              marginVertical: 10,
            }}
            placeholderTextColor="#fff"
            placeholder="Name"
            keyboardType="default"
            onChangeText={e => setData({...data, name: e})}
          />
          <TextInput
            style={{
              width: '100%',
              height: 70,
              backgroundColor: '#84C3E2',
              borderRadius: 10,
              paddingLeft: 20,
              fontSize: 16,
              marginVertical: 10,
            }}
            placeholderTextColor="#fff"
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={e => setData({...data, email: e})}
          />
          <TextInput
            style={{
              width: '100%',
              height: 70,
              backgroundColor: '#84C3E2',
              borderRadius: 10,
              paddingLeft: 20,
              fontSize: 16,
              marginVertical: 10,
            }}
            placeholderTextColor="#fff"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={e => setData({...data, password: e})}
          />
        </View>
        {/* extra */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, color: '#505050'}}>
            Do you have an account?{' '}
          </Text>
          <Text
            onPress={() => navigate('LoginScreen')}
            style={{color: '#009ABC', fontSize: 16, paddingLeft: 5}}>
            Login
          </Text>
        </View>
      </View>
      {/* button Part */}
      <TouchableOpacity
        onPress={createUser}
        style={[Style.button, {width: '100%'}]}>
        {flag ? (
          <ActivityIndicator color="#fff" size="small" animating={flag} />
        ) : (
          <Text style={[Style.buttonText]}>Sign Up</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

export default SignUpScreen;
