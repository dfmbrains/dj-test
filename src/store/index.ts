import { configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import djSlice from './djSlice'


const store = configureStore({
    reducer: {
        dj: djSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
export default store