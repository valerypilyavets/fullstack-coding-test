import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducers from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: reducers.productsReducer,
    product: reducers.productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
