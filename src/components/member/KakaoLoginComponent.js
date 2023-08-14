import { Link } from "react-router-dom";


const REST_KEY= '071d01b9d7104c6c9277e10ed51b5180'
const REDIRECT_URI= 'http://localhost:3000/member/kakao'
// 위 둘은 작은따옴표('').


const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
// 이거는 빽틱?(``).


const KakaoLoginComponent = () => {
    
    return ( 

        <div className="m-auto" style={{width:"95px"}}>
            <Link to={kakaoURL}>
                <img className="m-auto" src={require("../../images/kakao_login_medium.png")}></img>
            </Link>
        </div>

    );
    
}
 
export default KakaoLoginComponent;