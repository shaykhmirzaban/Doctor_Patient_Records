import {Image, Text, View, TouchableOpacity, StatusBar} from 'react-native';

// css
import Style from '../boilerplate/globalStyle';

function WelcomeScreen({navigation}) {
  const navigate = name => {
    navigation.navigate(name);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EFFAFF',
      }}>
      <StatusBar backgroundColor={'#CDEEFF'} barStyle={'dark-content'} />
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        {/* top part */}
        <Image
          style={{
            width: '100%',
            height: 350,
            borderBottomRightRadius: 30,
          }}
          source={require('../../images/welcome.jpg')}
        />
        {/* middle part */}
        <View style={{marginVertical: 20, width: '80%'}}>
          <Text style={{color: '#009ABC', fontWeight: 'bold', fontSize: 18}}>
            DOCTOR
          </Text>
          <Text style={{color: '#000', fontSize: 22, paddingVertical: 3}}>
            PATIENT RECORD
          </Text>
        </View>
      </View>
      {/* bottom part */}
      <TouchableOpacity
        style={[Style.button]}
        onPress={() => navigate('LoginScreen')}>
        <Text style={[Style.buttonText]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
