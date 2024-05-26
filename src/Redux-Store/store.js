import { configureStore } from "@reduxjs/toolkit";
import mode from "./slice/SelectMode";
import type from "./slice/SelectType";
import CardOpenSlice from "./slice/CardOpen";

const mainStore = configureStore({
    reducer: {
        mode: mode.reducer,
        type: type.reducer,
        card: CardOpenSlice.reducer,
    }
});

export default mainStore;