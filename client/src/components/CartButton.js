import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { subTotal } from '../slices/CartSlice'
import { useSelector } from 'react-redux'

const CartButton = ( { data } ) => {
    const navigation = useNavigation()
    let cartSubTotal = useSelector( state => subTotal( state ) );
    const goToCart = () => {
        navigation.navigate( 'Cart' )
    }
    return (
        <View className='px-3 items-center'>
            <TouchableOpacity onPress={goToCart} style={{ backgroundColor: themeColors.bgColor( 1 ), borderRadius: 30 }} className='absolute bottom-4 w-full h-16 p-4 flex-row items-center justify-between'>
                <View className='relative'>
                    <View className='bg-white opacity-30 h-10 w-10 rounded-full'>
                    </View>
                    <View className='h-10 w-10 rounded-full absolute items-center justify-center'>
                        <Text className='text-xl text-white font-bold absolute'>{data.length}</Text>
                    </View>
                </View>
                <Text className='text-white text-xl font-bold'>View Cart</Text>
                <Text className='text-white text-xl font-bold'>$ {cartSubTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartButton