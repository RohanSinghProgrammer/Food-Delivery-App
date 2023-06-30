import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { themeColors } from '../../theme';
import DishCard from '../components/DishCard';
import CartButton from '../components/CartButton';
import { addRestaurant } from '../slices/RestaurantSlice';
import { useDispatch, useSelector } from 'react-redux';

const RestaurantScreen = () => {
  const item = useRoute().params;
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cart = useSelector( state => state.cart )
  const goBack = () => {
    navigation.goBack()
  }
  useEffect( () => {
    dispatch( addRestaurant( item ) )
  }, [] )

  return (
    <View className='flex-1 relative'>
      <StatusBar style='light' />
      {/* BG image */}
      <Image className='w-full h-72' source={item.image} />
      {/* back button */}
      <TouchableOpacity onPress={goBack} className='p-1.5 bg-white rounded-full absolute top-10 left-4'>
        <AntDesign name="arrowleft" size={24} color={themeColors.bgColor( 1 )} />
      </TouchableOpacity>
      {/* details section */}
      <ScrollView className='w-full h-full rounded-t-3xl bg-white -mt-10 p-4 relative'>
        <Text className='text-3xl font-bold'>{item.name}</Text>
        {/* description */}
        <View className='flex-row mt-1'>
          <View className='flex-row items-center mt-1'>
            <Image className='h-5 w-5' source={require( '../../assets/images/fullStar.png' )} />
            <Text> {item.stars} ({item.reviews} reviews) - {item.category}</Text>
          </View>
          <View className='flex-row items-center mt-1'>
            <EvilIcons name="location" size={24} color="black" />
            <Text>Nearby - {item.address}</Text>
          </View>
        </View>
        <Text className='mt-3'>{item.description}</Text>
        {/* menu section */}
        <Text className='my-4 text-2xl font-semibold'>Menu</Text>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={item.dishes}
          keyExtractor={item => item.id}
          renderItem={( { item } ) => <DishCard item={item} />}
        />
      </ScrollView>
      {/* cart button */}
      {cart.items.length > 0 && <CartButton data={cart.items} />}
    </View>
  )
}

export default RestaurantScreen