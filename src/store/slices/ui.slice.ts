import { PlaceSearchAddress } from './../../model/PlaceSearchResults';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface UIState {
    showSidebar: boolean;
    deliveryAddress: any | undefined;
};

const initialState: UIState = {
    showSidebar: false,
    deliveryAddress: undefined
};

export const persistAddress = createAsyncThunk('localstorage/address',
    async (address: any) => {
        localStorage.setItem('deliveryAddress', JSON.stringify(address));
        return address;
    });

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(persistAddress.fulfilled, (state, action) => {
            state.deliveryAddress = action.payload;
        })
    }
});

export const { toggleSidebar } = uiSlice.actions;


export default uiSlice;