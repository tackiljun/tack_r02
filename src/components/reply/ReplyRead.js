import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

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

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {
        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다.....`)
            refreshPage()
        })
    }

    if(reply.replyText === '해당 글은 삭제되었습니다.....') {
        return <></>
    }

    return ( 
        <div className="m-4 bg-blue-300 border-2">
            <div className="m-2">REPLY READ {rno}</div>
            <div className="m-2">
                <div>{rno}</div>
                <div>
                    <input 
                    className="bg-blue-100" type="text" 
                    name="replyText" onChange={handleChange} 
                    value={reply.replyText}>
                    </input>
                </div>
                <div>{reply.replyer}</div>
            </div>
            <div>
                <button className="m-2 p-2 bg-blue-100 border-2" onClick={handleClickModify}>
                    MODIFY
                </button>
                <button className="m-2 p-2 bg-blue-100 border-2" onClick={handleClickDelete}>
                    DELETE
                </button>
                <button className="m-2 p-2 bg-blue-100 border-2" onClick={cancleRead}>
                    CANCLE
                </button>
            </div>
        </div>
     );
}
 
export default ReplyRead;