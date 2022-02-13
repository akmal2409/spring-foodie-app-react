import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from './../services/api.slice';
import uiSlice, { initialState as uiInitialState, UIState } from "./slices/ui.slice";

const uiState = localStorage.getItem('uiState') ?
    JSON.parse((localStorage.getItem('uiState') as any)) : uiInitialState

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware),
    preloadedState: {
        ui: uiState
    }
})

export interface RootState {
    ui: UIState,
}

setupListeners(store.dispatch)

export default store;