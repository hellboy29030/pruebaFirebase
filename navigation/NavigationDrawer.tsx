import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/HomeScreen';
import { PageScreen } from '../screen/PageScreen';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="PageScreen" component={PageScreen} />
        </Drawer.Navigator>
    );
}