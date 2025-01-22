// 슬라이스 생성
// reducers 생성
// reducers 내보내기

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{
    id: 1,
    title: "상품1"
}]
const cartSlice = createSlice({
    name: "카트",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Your logic for addToCart
        },
        removeFromCart: (state, action) => {
            // Your logic for removeFromCart
        },
        incrementQty: (state, action) => {
            // Your logic for incrementQty
        },
        decrementQty: (state, action) => {
            // Your logic for decrementQty
        },
    }
})
export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
