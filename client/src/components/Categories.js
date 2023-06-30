import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../../constants'

const Categories = () => {
    const [activeItem, setActiveItem] = useState( 0 )
    return (
        <View className='py-2 px-4 flex-row'>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={( item ) => item.id}
                data={categories}
                renderItem={( { item, index } ) => <Category item={item} index={index} activeItem={activeItem} setActiveItem={setActiveItem} />}
            />
        </View>
    )
}

export default Categories

const Category = ( { item, index, activeItem, setActiveItem } ) => {
    let imgClass = activeItem === index ? 'bg-gray-600' : 'bg-gray-200';
    let textClass = activeItem === index ? 'font-semibold text-gray-800' : 'text-gray-500';
    const selectItem = () => {
        setActiveItem( index )
    }
    return (
        <TouchableOpacity onPress={selectItem} className='justify-center items-center mx-3'>
            <View className={'p-2 rounded-full ' + imgClass}>
                <Image source={item.image} className='h-10 w-10' />
            </View>
            <Text className={textClass}>{item.name}</Text>
        </TouchableOpacity> )
}