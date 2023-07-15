import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";


const SampleNav = () => {

    const todoArr = useSelector(state => state.todo)

    return ( 

        <div className="flex m-4 p-4 bg-blue-200 font-extrabold justify-center">
            <div className="m-auto text-3xl border-2">
                <Link to="/" >MAIN</Link>
            </div>
            <div className="m-auto text-3xl border-2">
                <Link to="/board/list" >BOARD</Link>
            </div>
            <div className="m-auto text-3xl border-2">
                <Link to="/products/list" >PRODUCTS</Link>
            </div>
            <div className="m-auto text-3xl border-2">
                <Link to="/about" >ABOUT</Link>
            </div>
            <div className="m-auto text-3xl border-2">
                <Link to="/mypage" >MY PAGE</Link>
            </div>
            <div className="m-auto p-2 text-2xl border-2 font-extrabold ">
                CART<span className="m-1 p-1 bg-white font-extrabold  ">
                        {todoArr.length}
                    </span>
            </div>
            <div className="m-auto text-2xl border-2">
                USER <LoginNav></LoginNav>
            </div>
            
        </div>
     );
}
 
export default SampleNav;