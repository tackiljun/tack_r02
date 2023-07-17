import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";


export const postLoginThunk = 
    createAsyncThunk('postLoginThunk', (params) => {
        return postLogin(params)
    })


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
    nickname: '',
    admin: false,
    //signed: false,  // 체크로그인이라는 함수를 만들 생각.
    loading: false,
    errorMsg: null
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
    },
    // extraReducers 설정방법 2가지
    // 1. 키,값 설정. / 2. 빌더설정.
    extraReducers: (builder) => {
        
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {
            console.log("fullfilled", action.payload)
            const {email, nickname, admin, errorMsg} = action.payload

            if(errorMsg) {
                state.errorMsg = errorMsg
                return
            }
            state.loading = false
            state.email = email
            state.nickname = nickname
            state.admin = admin

            setCookie("login", JSON.stringify(action.payload), 1)
        })
        .addCase(postLoginThunk.pending, (state, action) => {
            console.log("pending")
            state.loading = true
        })
        .addCase(postLoginThunk.rejected, (state, action) => {
            console.log("rejected")
        })
    }

    
})


//export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer