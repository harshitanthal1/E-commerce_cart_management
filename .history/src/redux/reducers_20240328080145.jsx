import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './cartReducer.jsx';

const store = configureStore({
  reducer: rootReducer,
});

export default store;