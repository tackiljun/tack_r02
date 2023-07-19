import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}


const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    //console.log(createSearchParams(queryObj).toString())

    useEffect(() => {

        getList(queryObj).then(data => {
            //console.log("===================================================================")
            console.log(data)
            setListData({...data})
        })

    }, [queryObj])

    return ( 

        <div className="bg-sb-01 text-2xl">
            <div>
                <ul className="flex flex-wrap container justify-center">
                    {listData.dtoList.map(dto => 
                        <li
                        className="w-1/6 h-[320px] bg-blue-200 m-4 p-2 rounded-md shadow-lg hover:cursor-pointer"
                        key={dto.pno}
                        onClick={() => moveRead(dto.pno)} 
                        >
                        <div>
                            <div className=" font-extrabold">{dto.pno}</div>
                            <div className="flex justify-center items-center">
                                <img src={`http://localhost/s_${dto.fname}`} alt='ddd'></img>
                            </div>
                            <div className="text-center  font-extrabold">
                                <div>
                                    {dto.pname}-{dto.price}
                                </div>
                                <div>
                                    리뷰 {dto.reviewCnt} - {dto.reviewAvg}
                                </div>
                            </div>
                        </div>
                        </li>)}
                </ul>
            </div>

            <ListPageComponent movePage={movePage}{...listData}></ListPageComponent>       
        </div>
     );
}
 
export default ListComponent;