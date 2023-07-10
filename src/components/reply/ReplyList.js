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
        <div>
            <div>
                REPLY LIST
            </div>
            <div>
            
                <ul>
                    {listData.dtoList.map(reply => 
                    <li key={reply.rno} onClick={() => changeCurrent(reply.rno)}>
                        {reply.rno} -- {reply.replyText}
                    </li>)}
                </ul>
                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>
        </div>
     );
}
 
export default ReplyList;