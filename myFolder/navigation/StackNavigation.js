import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigation from './TabNavigation';
import PatientDetailScreen from '../screens/PatientDetailScreen';
import UpdatePatientRecordScreen from '../screens/UpdatePatientRecordScreen';
import ProfileUpdateScreen from '../screens/ProfileUpdateScreen';

const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#009ABC',
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerStyle: {backgroundColor: '#EAF8FF'},
      }}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PatientDetail"
        component={PatientDetailScreen}
        options={{headerTitle: 'Patient Detail'}}
      />
      <Stack.Screen
        name="UpdatePatientRecordScreen"
        component={UpdatePatientRecordScreen}
        options={{headerTitle: 'Update Patient Record'}}
      />
      <Stack.Screen
        name="PrfileUpdateScreen"
        component={ProfileUpdateScreen}
        options={{headerTitle: 'Update Profile'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
