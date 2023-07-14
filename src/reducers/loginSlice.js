import { createSlice } from "@reduxjs/toolkit";


const initState = {
    email:'',
    signed: false
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)

            return {email:payload.email, signed:true}
        }
    }
})

export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer