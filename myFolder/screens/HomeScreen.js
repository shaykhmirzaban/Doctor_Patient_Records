import DropDownPicker from 'react-native-dropdown-picker';
import {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// firebase
import database from '@react-native-firebase/database';

function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('name');
  const [flag, setFlag] = useState(false);
  const [items, setItems] = useState([
    {label: 'Name', value: 'name'},
    {label: 'Disease', value: 'disease'},
    {label: 'Date', value: 'date'},
  ]);

  useEffect(() => {
    setFlag(true);

    const userKey = async () => {
      try {
        let key = await AsyncStorage.getItem('id');

        database()
          .ref(`PatientRecord/${key}`)
          .on('value', snapshort => {
            if (snapshort.exists()) {
              setData(Object.values(snapshort.val()));
              setFlag(false);
            }
          });

        setFlag(false);
      } catch (error) {
        ToastAndroid.show(error, ToastAndroid.SHORT);
        setFlag(false);
      }
    };
    userKey();
  }, []);

  const navigate = (name, data) => {
    navigation.navigate(name, data);
  };

  const searchFn = text => {
    if (text) {
      let filterValue = data.filter(item => {
        let particularData = item[value] && item[value].toUpperCase();
        let userValue = text.toUpperCase();
        return particularData.indexOf(userValue) > -1;
      });
      setData1(filterValue);
    }
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#EFFAFF'}}>
      {/* hero section */}
      <ImageBackground
        blurRadius={100}
        style={{width: '100%', height: 150}}
        source={require('../../images/home.jpg')}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{width: 100, marginHorizontal: 10, height: 60}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              dropDownContainerStyle={{
                backgroundColor: '#EAF8FF',
                borderWidth: 0,
                borderTopWidth: 2,
                borderColor: '#fff',
              }}
              style={{
                width: 100,
                height: 60,
                borderWidth: 0,
                backgroundColor: '#EAF8FF',
                color: '#727070',
                borderRadius: 10,
              }}
            />
          </View>
          <TextInput
            placeholder="Search Record"
            style={{
              width: '70%',
              height: 60,
              backgroundColor: '#EAF8FF',
              paddingLeft: 15,
              fontSize: 16,
              borderRadius: 10,
            }}
            placeholderTextColor={'#727070'}
            keyboardType="default"
            onChangeText={e => searchFn(e)}
          />
        </View>
      </ImageBackground>
      {/* patient record list */}
      <View style={{padding: 20, height: '75%'}}>
        {/* heading */}
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#333'}}>
            Patient Record
          </Text>
        </View>
        {/* list */}
        {flag ? (
          <ActivityIndicator size={'large'} color="#000" />
        ) : (
          <ScrollView
            style={{width: '100%', height: '100%', paddingVertical: 10}}>
            {data1 && data1.length > 0 ? (
              data1.map((value, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => navigate('PatientDetail', value)}
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: 15,
                        backgroundColor: '#E1F6FF',
                        borderRadius: 10,
                        marginVertical: 10,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#009ABC',
                            textTransform: 'capitalize',
                          }}>
                          {value.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            color: '#333',
                            fontWeight: 'bold',
                          }}>
                          {value.disease}
                        </Text>
                      </View>
                      <Text
                        style={{color: '#333', paddingTop: 10, fontSize: 15}}>
                        {value.date}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : data && data.length > 0 ? (
              data.map((value, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => navigate('PatientDetail', value)}
                      style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: 15,
                        backgroundColor: '#E1F6FF',
                        borderRadius: 10,
                        marginVertical: 10,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#009ABC',
                            textTransform: 'capitalize',
                          }}>
                          {value.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            color: '#333',
                            fontWeight: 'bold',
                          }}>
                          {value.disease}
                        </Text>
                      </View>
                      <Text
                        style={{color: '#333', paddingTop: 10, fontSize: 15}}>
                        {value.date}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <View>
                <Text style={{color: '#333', fontSize: 15}}>
                  There is no patient record.
                </Text>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

export default HomeScreen;
