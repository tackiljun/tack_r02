import { useSelector } from "react-redux";


const TodoList = () => {

    // obj가 배열일 것 같아.
    const todoArr = useSelector(state => state.todo)

    console.log("todo list", todoArr)

    return ( 
        <div>
            <ul>
                {todoArr.map( (ele, idx) => <li key={{idx}}>{ele}</li>)}
            </ul>
        </div>
    );
}
 
export default TodoList;