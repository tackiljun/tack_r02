import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNav from "./CartNav";
import { requestLogout } from "../../reducers/loginSlice";


const LoginNav = () => {

    const {email, nickname} = useSelector(state => state.login)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log("LoginNav.....", email)

    const handleClickLogout = () => {

        dispatch(requestLogout())
        //console.log(email)
        navigate("/")

        console.log("LogoutNav.....")
    }

    if(email !== '') {
        return (
            <div>
                <div>
                    {email} - {nickname}
                </div>
                <CartNav></CartNav>
                <div>
                    <button className="border-2" onClick={handleClickLogout}>LOGOUT</button>
                </div>
            </div>
        )
    }

    return ( 
        <div>
            <Link to="/member/login">LOGIN</Link>
        </div>
     );
     
}
 
export default LoginNav;