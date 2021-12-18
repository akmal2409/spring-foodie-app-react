import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
    showSidebar: boolean;
};

const initialState: UIState = {
    showSidebar: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        }
    }
});

export const { toggleSidebar } = uiSlice.actions;


export default uiSlice;