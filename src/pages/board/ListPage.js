import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";


const checkNull = (obj) => {

    const result = {}

    for(const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if( attrValue && attrValue !== 'null') {
        result[attrName] = attrValue
        }   
    } 

    return result
}

const ListPage = () => {

    const [search, setSearch] = useSearchParams()

    const navigate = useNavigate()

    console.log(search)

    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    console.log("---------------queryObj---------------")
    console.log(queryObj)

    const movePage = (num) => {
        console.log("----------NUM----------" + num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    //console.log("--------------- BOARD LIST ---------------")
    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({...queryObj})
    }

    const moveRead = (bno) => {

        console.log("moveRead: " + bno)

        const queryString = createSearchParams(queryObj).toString()

        navigate(`/board/read/${bno}?${queryString}`)

    }

    return ( 
        <div>
            BOARD LIST PAGE
            <ListSearchComponent queryObj={queryObj} moveSearch={moveSearch}>
            </ListSearchComponent>

            <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead}>
            </ListComponent>
        </div>
     );
}
 
export default ListPage;