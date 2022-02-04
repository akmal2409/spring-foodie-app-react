import { apiSlice } from './../services/api.slice';
import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { UIState } from "./slices/ui.slice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const persistedState = localStorage.getItem('state') ?
    JSON.parse((localStorage.getItem('state') as any)) : {}

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware),
    preloadedState: persistedState
})

export interface RootState {
    ui: UIState,
}

setupListeners(store.dispatch)

export default store;