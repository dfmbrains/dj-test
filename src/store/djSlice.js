import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '../utils/helpers/authService'
import axios from 'axios'

export const findDj = createAsyncThunk(
   'djList/find',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/photos?_limit=6'
         )
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const signUpDj = createAsyncThunk(
   'auth/signupDj',
   async (signupData, thunkAPI) => {
      try {
         const response = await authService.signUpRequestDj(signupData)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)
export const signUpBusiness = createAsyncThunk(
   'auth/signupBusiness',
   async (signupData, thunkAPI) => {
      try {
         const response = await authService.signUpRequestBusiness(signupData)
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message)
      }
   }
)
const initialState = {
   djList: [],
}

const djSlice = createSlice({
   name: 'djList',
   initialState,
   reducers: {
      findDj: (state, action) => {},
   },

   extraReducers: {
      [findDj.pending]: (state) => {
         state.status = 'loading'
         state.error = null
      },
      [findDj.fulfilled]: (state, action) => {
         state.status = 'resolved'
         state.error = null
         console.log(action.payload)
         state.djList = [...state.djList, ...action.payload]
      },
      [findDj.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
   },
})

export const djActions = djSlice.actions
export default djSlice
