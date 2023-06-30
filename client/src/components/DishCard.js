import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { themeColors } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getItemById, removeFromCart } from '../slices/CartSlice';

const DishCard = ( { item } ) => {
    const dispatch = useDispatch()
    const dish = useSelector( state => getItemById( state, item.id ) )[0] // only get one(first) item

    const addIntoCart = () => {
        dispatch( addToCart( { ...item, qty: 1 } ) )
    }
    const removeItemFromCart = () => {
        dispatch( removeFromCart( { id: item.id } ) )
    }
    return (
        <Pressable style={{ elevation: 3 }} className='p-2 rounded-3xl mb-2.5 flex-row items-center bg-gray-50'>
            <Image className='h-24 w-24 rounded-3xl' source={item.image} />
            <View className='p-2 flex-1'>
                <Text className='text-xl'>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text className='mt-2 text-xl font-semibold'>$ {item.price}</Text>
            </View>
            <View className='flex-row items-center space-x-2'>
                <TouchableOpacity
                    disabled={dish?.qty === undefined ? true : false}
                    onPress={removeItemFromCart} >
                    <AntDesign name="minuscircle" size={24} color={themeColors.bgColor( 1 )} />
                </TouchableOpacity>
                <Text className='text-lg'>{dish?.qty ? dish?.qty : 0}</Text>
                <TouchableOpacity onPress={addIntoCart}>
                    <AntDesign name="pluscircle" size={24} color={themeColors.bgColor( 1 )} />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

export default DishCard