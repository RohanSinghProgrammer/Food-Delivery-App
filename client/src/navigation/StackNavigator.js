import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen'
import OrderPrepareScreen from '../screens/OrderPrepareScreen';
import RestaurantScreen from '../screens/RestaurantScreen'
import TrackOrderScreen from '../screens/TrackOrderScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen options={{ presentation: 'modal' }} name="Cart" component={CartScreen} />
            <Stack.Screen options={{ presentation: 'fullScreenModal' }} name="OrderPrepare" component={OrderPrepareScreen} />
            <Stack.Screen options={{ presentation: 'fullScreenModal' }} name="TrackOrder" component={TrackOrderScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator