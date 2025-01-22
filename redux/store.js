import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// 스토어 생성
export const store = configureStore({
    reducer: {
        // 슬라이스 이곳에 위치
        cart: cartSlice,
    }
})