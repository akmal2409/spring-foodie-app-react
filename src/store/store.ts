import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { UIState } from "./slices/ui.slice";


export default configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export interface RootState {
    ui: UIState
}