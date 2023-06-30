import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../../constants/index'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { removeRestaurant } from '../slices/RestaurantSlice';
import { clearCart } from '../slices/CartSlice';

const TrackOrderScreen = () => {
  const restaurant = useSelector( state => state.restaurant.restaurant );
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goToHome = () => {
    dispatch( clearCart() )
    navigation.navigate( 'Home' )
  }
  return (
    <View className='flex-1'>
      <StatusBar style='dark' />
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className='flex-1'
        mapType='standard'
      >
        <Marker
          pinColor={themeColors.bgColor( 1 )}
          title={restaurant.name}
          description={restaurant.description}
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng
          }}
        />
      </MapView>
      <View className='p-4 rounded-t-3xl bg-white'>
        {/* estimate time */}
        <View className='my-4 flex-row items-center'>
          <View className='flex-1'>
            <Text className='text-xl font-semibold text-gray-700'>Estimate Arrival</Text>
            <Text className='text-3xl font-bold'>20-30 Minutes</Text>
            <Text className='text-light'>Your order is own its way!</Text>
          </View>
          <Image className='h-24 w-24' source={require( '../../assets/images/bikeGuy2.gif' )} />
        </View>
        {/* delivery boy contact info */}
        <View style={{ backgroundColor: themeColors.bgColor( 1 ), borderRadius: 40 }} className='p-3 flex-row items-center'>
          <Image className='h-12 w-12 rounded-full' source={require( '../../assets/images/deliveryGuy.png' )} />
          <View className='px-2 flex-1'>
            <Text className='text-lg font-semibold text-white'>Rambo Roy</Text>
            <Text className='text-white text-sm'>Your Rider</Text>
          </View>
          <TouchableOpacity className='py-2.5 px-3 bg-white rounded-full mr-2.5'>
            <FontAwesome name="phone" size={24} color={themeColors.bgColor( 1 )} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHome} className='p-1.5 bg-white rounded-full'>
            <Entypo name="cross" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default TrackOrderScreen