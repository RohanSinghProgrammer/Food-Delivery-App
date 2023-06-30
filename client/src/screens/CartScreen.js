import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native';
import { featured } from '../../constants';
import Button from '../components/Button';
import OrderItemCard from '../components/OrderItemCard';
import { useSelector } from 'react-redux';
import { subTotal } from '../slices/CartSlice';
import EmptyCart from './EmptyCart';

const CartScreen = () => {
    const navigation = useNavigation()
    const data = useSelector( state => state.cart.items )
    const total = useSelector( state => subTotal( state ) )
    const deliveryFee = 2; // hardcoded for now
    const goBack = () => {
        navigation.goBack()
    }
    const goToOrder = () => [
        navigation.navigate( 'OrderPrepare' )
    ]
    return (
        <SafeAreaView className='flex-1 relative'>
            <StatusBar style='dark' />
            {/* header */}
            <View className='flex-row justify-between items-center p-2.5'>
                {/* back button */}
                <TouchableOpacity style={{ backgroundColor: themeColors.bgColor( 1 ) }} onPress={goBack} className='p-1.5 bg-white rounded-full'>
                    <AntDesign name="arrowleft" size={24} color='white' />
                </TouchableOpacity>
                {/* heading */}
                <View className='items-center'>
                    <Text className='text-xl font-semibold'>Your Cart</Text>
                    <Text className='text-gray-700'>{data.name}</Text>
                </View>
                {/* something for future */}
                <View className='w-6'></View>
            </View>
            {data.length > 0 ?
                <View className='flex-1'>
                    {/* estimate time */}
                    <View style={{ backgroundColor: themeColors.bgColor( 0.2 ) }} className='flex-row w-full items-center justify-between px-4'>
                        <Image className='h-20 w-20' source={require( '../../assets/images/bikeGuy.png' )} />
                        <Text>Delivered in 20-30 minutes</Text>
                        <TouchableOpacity>
                            <Text style={{ color: themeColors.bgColor( 1 ) }} className='font-semibold' >Change</Text>
                        </TouchableOpacity>
                    </View>
                    {/* items */}
                    <ScrollView className='flex-1 p-4'>
                        {data.map( ( item, index ) => <OrderItemCard key={item.id} item={item} index={index} /> )}
                    </ScrollView>
                    {/* place order */}
                    <View style={{ backgroundColor: themeColors.bgColor( 0.2 ) }} className='p-4 rounded-t-3xl'>
                        <View className='flex-row items-center justify-between px-2 mb-3'>
                            <Text>Subtotal</Text>
                            <Text>$ {total}</Text>
                        </View>
                        <View className='flex-row items-center justify-between px-2 mb-3'>
                            <Text>Delivery Fee</Text>
                            <Text>$ {deliveryFee}</Text>
                        </View>
                        <View className='flex-row items-center justify-between px-2 mb-3'>
                            <Text className='font-semibold'>Order Total</Text>
                            <Text className='font-semibold'>$ {total + deliveryFee}</Text>
                        </View>
                        <Button title={'Place Order'} onPress={goToOrder} />
                    </View>
                </View>
                :
                <EmptyCart />}
        </SafeAreaView>
    )
}

export default CartScreen