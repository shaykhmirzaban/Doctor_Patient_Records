import {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// firebase
import auth from '@react-native-firebase/auth';

// css
import Style from '../boilerplate/globalStyle';

function LoginScreen({navigation}) {
  let [data, setData] = useState();
  let [flag, setFlag] = useState(false);

  const navigate = (name, id) => {
    navigation.navigate(name, id);
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        navigate('HomeScreen');
      }
    });
  }, []);

  // login
  const loginUser = () => {
    setFlag(true);
    if (data && data.email && data.password) {
      auth()
        .signInWithEmailAndPassword(data.email, data.password)
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
          // ...
          ToastAndroid.show('Successfully Login', ToastAndroid.SHORT);
          navigate('HomeScreen', user.uid);
          setFlag(false);
        })
        .catch(error => {
          // var errorCode = error.code;
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
            Login
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
            Do you not have an account?{' '}
          </Text>
          <Text
            onPress={() => navigate('SignUpScreen')}
            style={{color: '#009ABC', fontSize: 16, paddingLeft: 5}}>
            Sign up
          </Text>
        </View>
      </View>
      {/* button Part */}
      <TouchableOpacity
        onPress={loginUser}
        style={[Style.button, {width: '100%'}]}>
        {flag ? (
          <ActivityIndicator color="#fff" size="small" animating={flag} />
        ) : (
          <Text style={[Style.buttonText]}>Login</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

export default LoginScreen;
