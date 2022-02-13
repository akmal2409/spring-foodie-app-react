import { PlaceSearchAddress } from './../../model/PlaceSearchResults';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
    showSidebar: boolean;
    deliveryAddress: PlaceSearchAddress | undefined;
};

export const initialState: UIState = {
    showSidebar: false,
    deliveryAddress: undefined
};


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        },
        saveDeliveryAddress: (state, action: PayloadAction<PlaceSearchAddress>) => {
            state.deliveryAddress = action.payload;
        }
    }
});

export const { toggleSidebar, saveDeliveryAddress } = uiSlice.actions;


export default uiSlice;