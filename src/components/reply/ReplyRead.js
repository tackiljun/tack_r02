import { useEffect, useState } from "react";
import { deleteReply, getReply } from "../../api/repliesAPI";

const initState = {
    rno:0,
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyRead = ({rno, cancleRead, refreshPage}) => {

    console.log("ReplyRead.........." + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })

    }, [rno])

    const handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.....`)
            refreshPage()
        })
    }

    return ( 
        <div className="m-4 bg-red-600 border-2 text-white">
            <div>REPLY READ {rno}</div>
            <div>
                <div>{rno}</div>
                <div>{reply.replyText}</div>
                <div>{reply.replyer}</div>
            </div>
            <div>
                <button className="m-2 p-2 border-2">
                    MODIFY
                </button>
                <button className="m-2 p-2 border-2" onClick={handleClickDelete}>
                    DELETE
                </button>
                <button className="m-2 p-2 border-2" onClick={cancleRead}>
                    CANCLE
                </button>
            </div>
        </div>
     );
}
 
export default ReplyRead;