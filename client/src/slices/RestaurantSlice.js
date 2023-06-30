import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {},
}

export const cartSlice = createSlice( {
    name: 'counter',
    initialState,
    reducers: {
        addRestaurant: ( state, action ) => {
            state.restaurant = action.payload
        },
        removeRestaurant: () => {
            return {}
        },
    },
} )

// Action creators are generated for each case reducer function
export const { addRestaurant, removeRestaurant } = cartSlice.actions

export const currentRestaurant = initialState.restaurant;

export default cartSlice.reducer