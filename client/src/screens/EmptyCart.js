import { View, Text, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'

const EmptyCart = () => {
  return (
    <View className='flex-1 justify-center items-center'>
        <Image className='w-80 h-80 rounded-3xl' source={require('../../assets/images/emptycart.png')} />
      <Text style={{color: themeColors.text}} className='mt-6 text-3xl font-semibold'>Cart Empty</Text>
    </View>
  )
}

export default EmptyCart