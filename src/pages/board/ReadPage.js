import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    
    const {bno} = useParams()

    console.log(bno)
    console.log(useQueryObj)
    console.log("------------------------")
    

    return ( 
        <div>
            <div className="m-4">
                BOARD READ PAGE
                <ReadComponent bno={bno}></ReadComponent>
            </div>

            <ReplyWrapper bno={bno}></ReplyWrapper>

            <button onClick={moveList}>LIST</button>
        </div>
     );
}
 
export default ReadPage;