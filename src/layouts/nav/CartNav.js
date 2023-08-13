import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";
import { useNavigate } from "react-router-dom";


const CartNav = () => {

    console.log("Cart Nav..........")

    const {email, nickname} = useSelector(state => state.login)

    const {items} = useSelector(state => state.cart)

    const dispatch = useDispatch()
    
    // 로그인 시 cart개수를 가져오는 함수.
    useEffect(() => {

        if(!email) {
            return
        }
        dispatch(getCartThunk(email))

    }, [email])

    return ( 
        <div className="text-3xl text-red-500">
            CART {items.length}
        </div>
     );
     
}
 
export default CartNav;