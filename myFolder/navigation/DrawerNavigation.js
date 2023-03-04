import {createDrawerNavigator} from '@react-navigation/drawer';

// components
import CustomDrawer from './CustomDrawer.js';
import Home from '../screens/Home.js';
import Login from '../screens/Login.js';

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
