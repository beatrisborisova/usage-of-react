import { createSlice } from '@reduxjs/toolkit';

const initialState = { hasUser: false }

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: { payload: initialState }
    },
    reducers: {
        setHasUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setHasUser } = authSlice.actions;
export default authSlice.reducer;