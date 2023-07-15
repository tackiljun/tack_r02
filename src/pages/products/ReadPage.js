import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/product/ReadComponent"
import useCustomLogin from "../../hooks/useCustomLogin"


const ReadPage = () => {

    const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()
    // setSearch, moveRead, 안에 들어가?
    const {pno} = useParams()

    useCustomLogin(() => {
        alert("로그인을 부탁드려요.....")
    })

    console.log(pno)
    console.log(useQueryObj)
    console.log("------------------------")

    return ( 

        <div>
            <ReadComponent 
            pno={pno} 
            moveModify={moveModify} 
            moveList={moveList}>
            </ReadComponent>
        </div>
     );
}
 
export default ReadPage;