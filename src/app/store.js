import { configureStore } from '@reduxjs/toolkit';
import dishes from './redux/dishesSlice';
import cart from './redux/cartSlice';

export const store = configureStore({
  reducer: {
    dishes,
    cart
  }
})