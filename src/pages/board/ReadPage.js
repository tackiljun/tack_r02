import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";

const ReadPage = () => {

    const [queryObj, setSearch,moveRead, moveList] = useQueryObj()
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)

    return ( 
        <div>
            BOARD READ PAGE
            <button onClick={e => moveList()}>List</button>
        </div>
     );
}
 
export default ReadPage;