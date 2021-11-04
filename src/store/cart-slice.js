import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    title: newItem.title,
                    totalPrice: newItem.price
                });
           
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
            state.totalQuantity++;
            state.changed = true;
        },
        removeFromCart(state, action){
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id)
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--;
            state.changed = true;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;