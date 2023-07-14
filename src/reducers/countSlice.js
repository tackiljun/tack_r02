import { createSlice } from "@reduxjs/toolkit";

// createSlice - 금고역할.
const countSlice = createSlice({
    name: "CountSlice",
    // 초기상태.
    initialState: {num: 5},
    // reducers - 동기화처리. / 리턴값이 필요.
    // extraReducers - 비동기처리.
    reducers: {
        // 전역(전체)이라서 여러개를 만들어도 한번에 바꿔준다.
        // 시작값은 state.
        // 증가.
        inc: (state, param, third) => {
            console.log("inc.....")
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("--------------------")
            return {num: state.num + param.payload}
        },
        // 감소.
        dec: (state, param, third) => {
            console.log("dec.....")
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("--------------------")
            return {num: state.num - param.payload}
        }
    }
})

// actions내부?????
export const {inc, dec} = countSlice.actions
              // └> 외부로 빠지는 애들.

// 노출되는 부분.
export default countSlice.reducer