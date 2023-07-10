import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState(initState)


    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {

        reply.bno = bno

        // {result:223}
        postReply(reply).then(data => {

            console.log(data)

            alert(`${data.result}번 댓글이 등록완료` )

            refreshLast()

            setReply({...initState})

        } )

    }
 
    return ( 
        <div className="m-4 bg-red-600 border-2 text-white">
            <div>REPLY INPUT</div>
            <div className="m-2">
                <input
                 className="bg-black text-white"
                 type="text" name="replyText" value={reply.replyText} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <input
                 className="bg-black text-white"
                 type="text" name="replyer" value={reply.replyer} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <button className="border-2" onClick={handleClickRegister}>REGISTER</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;