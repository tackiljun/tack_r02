import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";


const LoginNav = () => {

    const {email, nickname} = useSelector(state => state.login)

    console.log("LoginNav.....", email)

    if(email !== '') {
        return (
            <div>
                <div>
                    {email} - {nickname}
                </div>
                <CartNav></CartNav>
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