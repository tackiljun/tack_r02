import axios from "axios";
import {getCookie, setCookie} from "../util/cookieUtil"


// axios에 추가적인 옵션을 추가할 때 axios.create().
// axios interceptor 총 4개 정의 
const jwtAxios = axios.create()


// https://axios-http.com/kr/docs/interceptors.
// 요청이 전달되기 전에 작업 수행.
const beforeReq = (config) => {

    console.log("beforeRequest..........", config)

    const {accessToken}  = getCookie("login")

    if(!accessToken) {
        throw new Error("NO ACCESS TOKEN")
    }
    
    config.headers.Authorization = `Bearer ${accessToken}`

    return config
}


// 요청 오류가 있는 작업 수행.
const requestFail = (err) => {

    console.log("request fail..........", err)

    return Promise.reject(err)
}


// 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
// 응답 데이터가 있는 작업 수행.
const beforeRes = async(res) => {

    console.log("2xx Response..........")

    if(res.data.error === 'Expired') {

        console.log("Access Token has expired")
        const newAccessToken = await refreshJWT()

        const originalRequest = res.config

        originalRequest.headers.Authorization =`Bearer ${newAccessToken}`

        return await axios(originalRequest)
    }
    return res
}


const refreshJWT = async () => {

    const cookieValue = getCookie("login")

    const {accessToken, refreshToken} = cookieValue

    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const res = await axios.get(`http://localhost:8080/api/member/refresh?refreshToken=${refreshToken}`, header)

    const newAccess = res.data.accessToken
    const newRefresh = res.data.refreshToken

    console.log("------------------------------")
    console.log("new access :" + newAccess )
    console.log("new refresh :" + newRefresh)


    cookieValue.accessToken = newAccess
    cookieValue.refreshToken = newRefresh
    console.log("------------------------------")
    console.log(cookieValue)

    setCookie("login", JSON.stringify(cookieValue), 1)

    return newAccess

}


// 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
// 응답 오류가 있는 작업 수행.
const responseFail  = (err) => {
    console.log("response fail..........")

    return Promise.reject(err)
}


// jwtAxios로 인터셉터할 때 사용할 것들을 정의.
jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)


export default jwtAxios