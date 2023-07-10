import { useEffect, useState } from "react";
import { getReply } from "../../api/repliesAPI";

const initState = {
    rno:0,
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyRead = ({rno, cancleRead}) => {

    console.log("ReplyRead.........." + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })

    }, [rno])

    return ( 
        <div className="m-8 bg-red-600 border-2 text-white">
            <div>REPLY READ {rno}</div>
            <div>
                <div>{rno}</div>
                <div>{reply.replyText}</div>
                <div>{reply.replyer}</div>
            </div>
            <div>
                <button className="m-2 p-2 border-2">MODIFY</button>
                <button className="m-2 p-2 border-2">DELETE</button>
                <button className="m-2 p-2 border-2" onClick={cancleRead}>CANCLE</button>
            </div>
        </div>
     );
}
 
export default ReplyRead;