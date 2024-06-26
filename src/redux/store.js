import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { todoSlice } from './slices/fetchTodos'
import { coinListSlice } from './slices/coinList'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    coinlist: coinListSlice.reducer,
  },
});