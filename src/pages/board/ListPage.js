import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";


// const checkNull = (obj) => {

//     const result = {}

//     for(const attr in obj) {
//         const attrName = attr
//         const attrValue = obj[attr]

//         if( attrValue && attrValue !== 'null') {
//         result[attrName] = attrValue
//         }   
//     } 

//     return result
// }

const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()
  
    console.log("queryObj --------")
    console.log(queryObj)
  
    const movePage = (num) => {
  
      console.log("NUM ------------" + num)
      queryObj.page = num
      setSearch({...queryObj})
    }
  
    const moveSearch = (type, keyword) => {
      queryObj.page = 1
      queryObj.type = type
      queryObj.keyword = keyword
  
      setSearch({...queryObj})
    }

    return ( 
        <div>
          <div className="m-4">BOARD LIST PAGE</div>
          
          <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}>
          </ListSearchComponent>
    
          <ListComponent 
          queryObj={queryObj} 
          movePage = {movePage} 
          moveRead = {moveRead}
          ></ListComponent>
        </div>  
       );
    }
 
export default ListPage;