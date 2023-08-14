import axios from "axios"


const REST_KEY= '071d01b9d7104c6c9277e10ed51b5180'
const REDIRECT_URI= 'http://localhost:3000/member/kakao'
// 엑세스 코드 요청 (토큰 받기).
const AUTH_TOKEN_URL="https://kauth.kakao.com/oauth/token"


export const getAccessToken = async (authCode) => {

    // header 타입.
    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    // 파라미터 만들기 객체로.
    const params = {
        grant_type: 'authorization_code',
        client_id: REST_KEY,
        redirect_uri: REDIRECT_URI,
        code: authCode 
    }

    // post방식으로 url, 파라미터, 헤더타입.
    const res = await axios.post(AUTH_TOKEN_URL, params, header)

    // res의 data에서 access_token 가져오기.
    const {access_token} = res.data

    return access_token

}


// 사용자 정보 가져오기.
const KAKAO_USER = "https://kapi.kakao.com/v2/user/me"


export const getUserEmail = async (accessToken) => {

    // header 타입.
    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    // get,post 둘 다 가능.
    const res = await axios.get(KAKAO_USER, header)

    // res의 data에서 kakao_account 로그인한 정보 가져오기.
    const {kakao_account} = res.data

    console.log(kakao_account);

    return kakao_account.email
    
}