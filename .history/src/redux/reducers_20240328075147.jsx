import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const initialState = {
    products: [
      { id: 1, name: 'Product 1', price: 10, quantity: 0 },
      { id: 2, name: 'Product 2', price: 20, quantity: 0 },
      { id: 3, name: 'Product 3', price: 30, quantity: 0 },
    ],
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if (existingProductIndex !== -1) {
          state.cart[existingProductIndex].quantity++;
          state.cart[existingProductIndex].totalPrice = state.cart[existingProductIndex].quantity * state.cart[existingProductIndex].price;
          return { ...state, cart: [...state.cart] };
        } else {
          const newProduct = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
          return { ...state, cart: [...state.cart, newProduct] };
        }
  
      case 'UPDATE_QUANTITY':
        const productToUpdateIndex = state.cart.findIndex(item => item.id === action.payload.productId);
        if (productToUpdateIndex !== -1) {
          state.cart[productToUpdateIndex].quantity = action.payload.quantity;
          state.cart[productToUpdateIndex].totalPrice = state.cart[productToUpdateIndex].quantity * state.cart[productToUpdateIndex].price;
          return { ...state, cart: [...state.cart] };
        } else {
          return state;
        }
  
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;