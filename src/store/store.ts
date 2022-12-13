import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog.reducer'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

//Lấy RootState và AppDispach từ store dùng cho typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch
