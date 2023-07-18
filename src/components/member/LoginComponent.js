import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";
import KakaoLoginComponent from "./KakaoLoginComponent";


const initState = {
    email:'user@aaa.com',
    pw:'1111'
    //pw:'1234'
}


const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg

    console.log("ERRORMSG: " + errorMsg)

    return ( 

        <div>
            {/* 나중에 모달로 빼자 */}
            <div className="text-3xl bg-red-500">
                {loginState.loading ? '로그인중':''}
            </div>
            
            {errorMsg ? 
            <div className="text-3xl bg-red-500">이메일과 패스워드를 확인해주세요!!!!!
            </div> : <></>}
            
            <div className="m-2">
                <label>EMAIL</label>
                <input 
                type="text" 
                name="email" 
                value={loginInfo.email} 
                onChange={() => {}}>
                </input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input 
                type="password" 
                name="pw" 
                value={loginInfo.pw} 
                onChange={() => {}}>
                </input>
            </div>
            <div>
                <button className="m-2 p-3 border-2 bg-white" onClick={() => dispatch(postLoginThunk(loginInfo))}>
                    LOGIN
                </button>
            </div>
            <div>
                
            </div>
            
        </div>
     );
}
 
export default LoginComponent;