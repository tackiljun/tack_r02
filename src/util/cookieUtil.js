import { Cookies } from "react-cookie";


// Cookie는 문자열만 사용 가능.
// JSON.parse(문자열) : JSON 문자열을 JavaScript 값이나 객체 변환.
// JSON.stringify(JSON데이터) : JavaScript 값이나 객체를 JSON 문자열로 변환.
// 담는것 / 가져오는것.
const cookies = new Cookies()


export const setCookie = (cookieName, value, days) => {

    const expires = new Date()
    // setUTCDate - 날짜를 조정하는기능.
    expires.setUTCDate(expires.getUTCDate() + days);

    // 쿠키를 저장하면 옵션이 들어가.
    cookies.set(cookieName, value, { path: "/", expires: expires})
    // 로그인을 하면 쿠키값을 저장해야해.
}


export const getCookie = (cookieName) => {

    // 문자열.
    return cookies.get(cookieName)
}


export const removeCookie = (cookieName, path="/") => {

    cookies.remove(cookieName, {path:path})
}
