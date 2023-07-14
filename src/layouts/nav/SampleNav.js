import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SampleNav = () => {

    const todoArr = useSelector(state => state.todo)

    return ( 
        <div className="flex m-4 p-4 bg-blue-200 font-extrabold justify-center">
            <div className="m-4 text-4xl border-2">
                <Link to="/" >MAIN</Link>
                <span className="bg-red-500 font-extrabold">{todoArr.length}</span>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/board/list" >BOARD</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/products/list" >PRODUCTS</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/mypage" >MY PAGE</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/about" >ABOUT</Link>
            </div>
        </div>
     );
}
 
export default SampleNav;