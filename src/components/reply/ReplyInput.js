import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}


const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState({...initState})

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

        })

    }
 
    return ( 

        <div className="m-auto w-1/5 bg-blue-200 border-2">
            <div className="text-center">REPLY INPUT</div>
            <div className="m-2 text-center">
                <input
                 type="text" name="replyText" 
                 value={reply.replyText} 
                 onChange={handleChange}>
                 </input>
            </div>
            <div className="m-2 text-center">
                <input
                 type="text" 
                 name="replyer" 
                 value={reply.replyer} 
                 onChange={handleChange}>
                 </input>
            </div>
            <div className="m-2 text-center">
                <button 
                className="bg-blue-300 border-2" 
                onClick={handleClickRegister}>
                    REGISTER
                </button>
            </div>
        </div>

     );
     
}
 
export default ReplyInput;