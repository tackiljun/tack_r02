import ListComponent from "../../components/product/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

    const movePage = (num) => {
  
        console.log("NUM ------------" + num)
        queryObj.page = num
        setSearch({...queryObj})

    }

    return ( 
      
        <div className="text-3xl">
            PRODUCTS LIST PAGE

            <ListComponent 
            queryObj={queryObj} 
            movePage = {movePage} 
            moveRead = {moveRead}>
            </ListComponent>
        </div>

     );
     
}
 
export default ListPage;