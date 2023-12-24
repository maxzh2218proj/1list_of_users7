import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseCount:(state) => {
            state.value += 1
        },
        decreateCount:(state) => {
            state.value -= 1
        },
        resetCount:(state) => {
            state.value = 0
        }
    }
})

export const {increaseCount, decreateCount, resetCount} = counterSlice.actions;
export default counterSlice.reducer;