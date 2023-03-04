import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';

// components
import HomeScreen from '../screens/HomeScreen';
import AddPatientRecordScreen from '../screens/AddPatientRecordScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';

const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerTitleStyle: {
          color: '#009ABC',
          fontWeight: 'bold',
          fontSize: 20,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          backgroundColor: '#009ABC',
          height: 65,
        },
        headerStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={40} color="#fff" />;
          },
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddPatientRecordScreen"
        component={AddPatientRecordScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="add" size={40} color="#84C3E2" />
              </View>
            );
          },
          headerTitle: 'Add Patient Record',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="person" size={40} color="#fff" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
