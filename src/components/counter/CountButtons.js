import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButtons = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2, "INC")) // dispatch해주고 안에는 함수를 호출.
    }

    const handleClickDec = () => {
        dispatch(dec(2 ,"DEC"))
    }

    return ( 
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickDec}>DEC</button>
        </div>
     );
}
 
export default CountButtons;