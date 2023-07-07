import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";

const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    
    const {bno} = useParams()

    console.log(bno)
    console.log(useQueryObj)
    console.log("------------------------")
    

    return ( 
        <div>
            BOARD READ PAGE
            <ReadComponent bno={bno}></ReadComponent>

            <button onClick={moveList}>List</button>
        </div>
     );
}
 
export default ReadPage;