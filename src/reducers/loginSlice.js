import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";


const loadCookie = () => {

    const loginObj = getCookie("login")

    console.log("login..........obj..........")
    console.log(loginObj)

    if(!loginObj) {
        return initState
    }
    return loginObj
}


const initState = {
    email: '',
    signed: false  // 체크로그인이라는 함수를 만들 생각.
}


const loginSlice = createSlice({
    name: 'loginSlice',
    // 함수의 리턴값으로 받을 생각.
    initialState: loadCookie(),  
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)

            const loginObj = {email:payload.email, signed:true}

            setCookie("login", JSON.stringify(loginObj), 1)

            return loginObj
        }
    }
})


export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer