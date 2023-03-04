import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{padding: 20}}>
        <Text>Shaykh Mirzaban</Text>
      </View>
    </View>
  );
}

export default CustomDrawer;
