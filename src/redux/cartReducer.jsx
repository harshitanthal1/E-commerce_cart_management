const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex].quantity++;
          return { ...state, cartItems: [...state.cartItems] };
        } else {
          const newItem = { ...action.payload, quantity: 1 };
          return { ...state, cartItems: [...state.cartItems, newItem] };
        }
  
      case 'REMOVE_FROM_CART':
        return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
  
      case 'UPDATE_QUANTITY':
        const itemIndexToUpdate = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (itemIndexToUpdate !== -1) {
          state.cartItems[itemIndexToUpdate].quantity = action.payload.quantity;
          return { ...state, cartItems: [...state.cartItems] };
        } else {
          return state;
        }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;