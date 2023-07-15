import { useSelector } from "react-redux";


const CountDisplay = () => {

                // Selector 안에 함수를 넣어준다.
    const obj = useSelector(state => state.counter) // 파라미터가 state.

    console.log(obj)

    return ( 
        
        <div className="text-4xl">
            COUNT: {obj.num}
        </div>
     );
}
 
export default CountDisplay;