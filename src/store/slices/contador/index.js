import {createSlice} from '@reduxjs/toolkit';

export const contadorSlice = createSlice({
    name: 'contador',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementar: state => {
            state.value += 1;
        },
        decrementar: state => {
            state.value -= 1;
        },
        resetear: state => {
            state.value = 0;
        },
        setValue: (state, action) => {
            state.value = action.payload
        }
    },
});
export const {incrementar, decrementar, resetear ,setValue} = contadorSlice.actions;
export default contadorSlice.reducer;