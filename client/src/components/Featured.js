import { View, Text, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native';

const Featured = ( { featured } ) => {
    return (
        <View className='p-4'>
            {/* heading */}
            <View className='flex-row w-full justify-between items-center px-2 mb-4'>
                <View>
                    <Text className='text-xl font-bold'>{featured.title}</Text>
                    <Text className='text-gray-700 font-light'>{featured.description}</Text>
                </View>
                <TouchableOpacity>
                    <Text className='font-semibold' style={{ color: themeColors.bgColor( 1 ) }}>See All</Text>
                </TouchableOpacity>
            </View>
            {/* cards */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={featured.restaurants}
                keyExtractor={item => item.id}
                renderItem={( { item, index } ) => <RestaurantCard item={item} />}
            />
        </View>
    )
}

export default Featured

const RestaurantCard = ( { item } ) => {
    const navigation = useNavigation()
    const redirectToRestaurantScreen = () => {
        navigation.navigate( 'Restaurant', item )
    }
    return (
        <TouchableWithoutFeedback onPress={redirectToRestaurantScreen} >
            <View className='h-56 w-64 border-b border-gray-400 rounded-3xl mx-2 overflow-hidden'>
                {/* image */}
                <View className='w-full h-32'>
                    <Image className='h-full w-full' source={item.image} />
                </View>
                {/* description */}
                <View className='p-2'>
                    <Text className='text-lg font-semibold'>{item.name}</Text>
                    <View className='flex-row items-center mt-1'>
                        <Image className='h-5 w-5' source={require( '../../assets/images/fullStar.png' )} />
                        <Text> {item.stars} ({item.reviews} reviews) - {item.category}</Text>
                    </View>
                    <View className='flex-row items-center mt-1'>
                        <EvilIcons name="location" size={24} color="black" />
                        <Text>Nearby - {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}