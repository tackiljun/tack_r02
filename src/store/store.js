import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/cartSlice";


// 이 함수의 결과물이 스토어.
export default configureStore({
    reducer : { 
        // 이름?, 값? 추가해.
        counter: countSlice, //reducer setting
        todo: todoSlice,
        login: loginSlice,
        cart: cartSlice
     }
})