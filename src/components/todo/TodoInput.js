import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";


const TodoInput = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleClickSave = () => {
        dispatch(addTodo(text))
    }
    
    return ( 
        <div>
            TODO INPUT
            <input 
            type="text" 
            value={text} 
            onChange={e => setText(e.target.value)}>
            </input>
            <button 
            className="m-2 p-2 bg-blue-300 border-2" 
            onClick={handleClickSave}>
                SAVE
            </button>
        </div>
     );
}
 
export default TodoInput;