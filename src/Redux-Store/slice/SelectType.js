import { createSlice } from "@reduxjs/toolkit";

const type = createSlice({
    name: "typeSlice",
    initialState:{
        selectedType: "f-type"
    },
    reducers:{
        setSelectedType: (state,action) => {
            state.selectedType = action.payload;
        }
    }
});

export const { setSelectedType } = type.actions;
export default type;