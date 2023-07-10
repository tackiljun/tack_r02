import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../common/ListPageComponent";
import ReplyInput from "./ReplyInput";


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


const ReplyList = ({bno, page, last, refresh, movePage, changeCurrent}) => {

    console.log("Reply List..... bno " + bno)

     // rendering시 에러방지.
    const [listData, setListData] = useState(initState)

    useEffect(() => {

        // 댓글데이터를 가져온다.
        getRepliesOfBoard(bno, page, last).then(data => {

            console.log("---------------------------------")
            console.log("------------------------")
            // console.log(bno)
            // console.log(page)
            // console.log(last)
            console.log(data)
            setListData(data)
        })  

    }, [bno, page, refresh, last])

    return ( 
        <div className="m-6">
            <div>
                REPLY LIST
            </div>
            <div>
                {/* <ul>
                    {listData.dtoList.map(reply => 
                    <li key={reply.rno} onClick={() => changeCurrent(reply.rno)}>
                        {reply.rno} -- {reply.replyText}
                    </li>)}
                </ul> */}
                <table className="min-w-[1280px] ml-auto mr-auto">
                    <thead>
                        <tr className="h-12 bg-blue-300">
                            <th className="border-2 font-bold m-2"
                            style={{ width: '5%' }}>NO.</th>
                            <th className="border-2 font-bold m-2"
                            style={{ width: '70%' }}>REPLY</th>
                            <th className="border-2 font-bold m-2"
                            style={{ width: '10%' }}>REPLYER</th>
                            {/* <th className="border-2 font-bold m-2"
                            style={{ width: '15%' }}>REGDATE</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {listData.dtoList.map(({rno,replyText,replyFile,replyer}) =>
                        <tr
                        className="text-center h-10 bg-blue-200 border-2"
                        key={rno}
                        onClick={() => changeCurrent(rno)}>               
                            <td className="w-10 border-2 ">{rno}</td>
                            <td className="w-96 border-2 hover:underline hover:cursor-pointer">
                                {replyText}&nbsp;&nbsp;[{replyFile}]
                            </td>
                            <td className="w-10 border-2 ">{replyer}</td>
                        </tr>
                        )}
                    </tbody>               
                </table>

                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>
        </div>
     );
}
 
export default ReplyList;