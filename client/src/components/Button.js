import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'

const Button = ( { title, onPress } ) => {
    return (
        <View className='px-2'>
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: themeColors.bgColor( 1 ), borderRadius: 40 }} className='p-4 justify-center items-center'>
            <Text className='text-xl text-white font-semibold'>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Button