import { configureStore } from "@reduxjs/toolkit";
import mode from "./slice/SelectMode";
import type from "./slice/SelectType";

const mainStore = configureStore({
    reducer: {
        mode: mode.reducer,
        type: type.reducer,
    }
});

export default mainStore;