import {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileScreen({navigation}) {
  let [flag, setFlag] = useState(false);
  let [data, setData] = useState();
  let [id, setId] = useState(0);

  const navigate = (name, val) => {
    navigation.navigate(name, val);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let userId = await AsyncStorage.getItem('id');
        setId(userId);
        database()
          .ref(`users/${userId}`)
          .on('value', snapshort => {
            if (snapshort.exists()) {
              setData(snapshort.val());
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const deleteFn = () => {
    const user = auth().currentUser;
    user
      .delete()
      .then(() => {
        // User deleted.
        database()
          .ref(`users/${id}`)
          .remove()
          .then(() => {
            ToastAndroid.show('Successfully Delete', ToastAndroid.SHORT);
            navigate('SignUpScreen');
          })
          .catch(() => {
            ToastAndroid.show('Something is wrong', ToastAndroid.SHORT);
          });
      })
      .catch(error => {
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Successfully Sign Out', ToastAndroid.SHORT);
        navigate('WelcomeScreen');
      })
      .catch(error => {
        // An error happened.
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={{
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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

          <TouchableOpacity onPress={logoutUser}>
            <Icon name="logout" size={22} color="#009ABC" />
            <Text style={{fontSize: 12, color: '#000'}}>Logout</Text>
          </TouchableOpacity>
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
          {/* Doctor name */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Doctor Name: </Text>
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
          {/* Doctor Email: */}
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{fontSize: 16, color: '#333'}}>Doctor Email: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.email}
            </Text>
          </View>
          {/* Doctor Password: */}
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={{fontSize: 16, color: '#333'}}>
                Doctor Password:{' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#009ABC',
                  paddingHorizontal: 5,
                  fontWeight: '900',
                }}>
                {flag
                  ? data && data.password && data.password
                  : data && data.password && '*'.repeat(data.password.length)}
              </Text>
            </View>
            {flag ? (
              <Icon
                name="visibility"
                size={25}
                color="#009ABC"
                onPress={() => setFlag(false)}
              />
            ) : (
              <Icon
                name="visibility-off"
                size={25}
                color="#009ABC"
                onPress={() => setFlag(true)}
              />
            )}
          </View>
          {/* Doctor Id */}
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
              flexWrap: 'wrap',
            }}>
            <Text style={{fontSize: 16, color: '#333'}}>Doctor Id: </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#009ABC',
                paddingHorizontal: 5,
                fontWeight: '900',
              }}>
              {data && data.id}
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
              onPress={() => navigate('PrfileUpdateScreen', data)}
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
    </ScrollView>
  );
}

export default ProfileScreen;
