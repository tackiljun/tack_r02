import { useEffect, useState } from "react";


const ListSearchComponent = ({queryObj, moveSearch}) => {

    // setTimeout(() => {
    //     moveSearch('t', '1')
    // }, 2000)

    //console.log("--------------------SearchComponent--------------------")
    // console.log(queryObj)
    const [searchObj, setSearchObj] = useState({type:'', keyword:''})

    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''
        setSearchObj({...searchObj})

    }, [queryObj])
    
    return ( 

        <div className="m-4 p-4 bg-blue-200 border-2">
            <select 
            className="m-2 p-2 border-2" 
            value={searchObj.type}
            onChange={ e => {
                searchObj.type = e.target.value
                setSearchObj({...searchObj})
            }}>
                <option value={''}>-----</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>
                <option value={'tcw'}>제목+내용+작성자</option>
            </select>

            <input 
            type="text" 
            className="m-2 p-2 border-2"
            value={searchObj.keyword}
            onChange={ e => {
                searchObj.keyword = e.target.value
                setSearchObj({...searchObj})
            }}>
            </input>

            <button className="m-2 p-2 bg-blue-300 border-2"
            onClick={ e => moveSearch(searchObj.type, searchObj.keyword)}>
                SEARCH
            </button>
        </div>
     );
}
 
export default ListSearchComponent;