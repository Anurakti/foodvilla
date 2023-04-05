import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {    // this reducers will map the actions(like addItem) with the reducer functions(()=>{})
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeitem: (state, action)=>{
            state.items.pop()
        },
        clearCart: (state)=>{
            state.items = []
        }
    }
})

export const {addItem, removeitem, clearCart} = cartSlice.actions

export default cartSlice.reducer