import { configureStore } from '@reduxjs/toolkit';
import contadorSlice from '../store/slices/contador';

export default configureStore({
    reducer: {
        contadorSlice,
    },
});