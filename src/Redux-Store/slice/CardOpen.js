import { createSlice } from "@reduxjs/toolkit";

const CardOpenSlice = createSlice({
    name: "cardSlice",
    initialState:{
        cardOpen: false
    },
    reducers:{
        openCardState: (state) => {
            state.cardOpen = !state.cardOpen;
        }
    }
});

export const { openCardState } = CardOpenSlice.actions;
export default CardOpenSlice;