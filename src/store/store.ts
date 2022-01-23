import { apiSlice } from './../services/api.slice';
import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { UIState } from "./slices/ui.slice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export interface RootState {
    ui: UIState,
}

setupListeners(store.dispatch)

export default store;