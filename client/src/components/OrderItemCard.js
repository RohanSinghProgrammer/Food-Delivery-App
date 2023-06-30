import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { themeColors } from '../../theme';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/CartSlice';

const OrderItemCard = ( { item, index } ) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        dispatch( removeFromCart( { id: item.id } ) )
    }
    return (
        <Pressable>
            <View style={{ elevation: 3 }} className='flex-row items-center bg-gray-100 py-2 px-3.5 mb-4 rounded-3xl'>
                <Text style={{ color: themeColors.bgColor( 1 ) }} className='mr-2'>{item.qty} x </Text>
                <Image className='h-14 w-14 rounded-full' source={item.image} />
                <Text className='flex-1 px-2 font-semibold'>{item.name}</Text>
                <Text className='font-semibold mr-2'>$ {item.price}</Text>
                <TouchableOpacity onPress={removeItem} >
                    <AntDesign name="minuscircle" size={24} color={themeColors.bgColor( 1 )} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default OrderItemCard