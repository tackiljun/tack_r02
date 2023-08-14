import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
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
        
        <div>
            <div className="m-auto text-center">
                LIST COMPONENT
                {/* <ul className="border-y-2 border-x-2 ">
                    <li> NUM - TITLE - REPLYCOUNT - REGDATE </li>
                    {listData.dtoList.map(dto => 
                        <li 
                        className="border-y-2"
                        key={dto.bno} onClick={() => moveRead(dto.bno)}>
                            {dto.bno} - {dto.title} - {dto.replyCount} - {dto.regDate}
                        </li>)}
                </ul> */}
                <table className="min-w-[1280px] ml-auto mr-auto">
                    <thead>
                        <tr className="h-12 bg-blue-300">
                            <th className="border-2 font-bold m-2"
                            style={{ width: '5%' }}>NO.</th>
                            <th className="border-2 font-bold m-2"
                            style={{ width: '70%' }}>TITLE</th>
                            <th className="border-2 font-bold m-2"
                            style={{ width: '10%' }}>WRITER</th>
                            <th className="border-2 font-bold m-2"
                            style={{ width: '15%' }}>REGDATE</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listData.dtoList.map(({bno,title,replyCount,writer,regDate}) =>
                        <tr
                        className="text-center h-10 bg-blue-200 border-2"
                        key={bno}
                        onClick={() => moveRead(bno)}>               
                            <td className="w-10 border-2 ">{bno}</td>
                            <td className="w-96 border-2 hover:underline hover:cursor-pointer">
                                {title}&nbsp;&nbsp;[{replyCount}]
                            </td>
                            <td className="w-10 border-2 ">{writer}</td>
                            <td className="w-10 border-2 ">{regDate}</td>
                        </tr>
                        )}
                    </tbody>               
                </table>
            </div>

            <ListPageComponent movePage={movePage} {...listData}>
            </ListPageComponent>
        </div>

     );
     
}
 
export default ListComponent;