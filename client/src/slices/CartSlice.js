import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice( {
  name: 'counter',
  initialState,
  reducers: {
    addToCart: ( state, action ) => {
      const index = state.items.findIndex( ele => ele.id === action.payload.id )
      if ( index >= 0 ) {
        state.items[index].qty += 1;
      } else {
        state.items.push( action.payload )
      }
    },
    removeFromCart: ( state, action ) => {
      const index = state.items.findIndex( ele => ele.id === action.payload.id )
      if ( index >= 0 ) {
        if ( state.items[index].qty > 1 ) {
          state.items[index].qty -= 1;
        } else {
          let currentItem = state.items[index];
          state.items = state.items.filter( ( item ) => item.id != currentItem.id );
        }
      } else {
        console.log( 'item is no more into the cart' )
      }
    },
    clearCart: ( state ) => {
      state.items = [];
    },
  },
} )

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const subTotal = state => state.cart.items.reduce( ( acc, val ) => acc + ( val.qty * val.price ), 0 )

export const getItemById = ( state, id ) => state.cart.items.filter( ( item ) => item.id === id );

export default cartSlice.reducer