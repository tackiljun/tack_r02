import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="flex m-4 p-4 bg-blue-200 font-extrabold justify-center">
            <div className="m-4 text-4xl border-2">
                <Link to="/" >MAIN</Link>
            </div>
            <div className="m-4 text-4xl border-2">
                <Link to="/board/list" >BOARD</Link>
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