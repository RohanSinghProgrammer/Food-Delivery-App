import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { themeColors } from '../../theme';

const Header = () => {
    return (
        <View className='w-full p-4 flex-row items-center'>
            <View className='flex-row items-center border flex-1 rounded-3xl p-2'>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput className='px-2 flex-1' placeholder='Restaurants' placeholderTextColor={'gray'} />
                <View className='h-6 border border-gray-400 mx-2' />
                <Ionicons name="location-outline" size={20} color="rgb(55 65 81)" />
                <Text className='text-gray-700'>
                    Kolkata, Barrackpore
                </Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: themeColors.bgColor( 1 ) }} className='p-2 rounded-full ml-2' >
                <Image tintColor='white' className='h-7 w-7' source={require( '../../assets/images/filter.png' )} />
            </TouchableOpacity>
        </View>
    )
}

export default Header