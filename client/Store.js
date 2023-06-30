import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/slices/CartSlice'
import RestaurantSlice from './src/slices/RestaurantSlice'

export const store = configureStore( {
    reducer: {
        cart: cartSlice,
        restaurant: RestaurantSlice
    },
} )