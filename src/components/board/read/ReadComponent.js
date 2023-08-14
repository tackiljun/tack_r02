import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";
import { useSelector } from "react-redux";


const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    regDate:'',
    modDate:''
}


const ReadComponent = ({bno}) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    }, [bno])

    return ( 
        <table className="min-w-[1280px] ml-auto mr-auto">
            <thead>
                <tr className="h-12 bg-blue-300">
                    <th className="border-2 font-bold m-2" style={{ width: '5%' }}>
                        NO.
                    </th>
                    <th className="border-2 font-bold m-2" style={{ width: '70%' }}>
                        TITLE
                    </th>
                    <th className="border-2 font-bold m-2" style={{ width: '10%' }}>
                        WRITER
                    </th>
                    <th className="border-2 font-bold m-2" style={{ width: '15%' }}>
                        REGDATE
                    </th>
                </tr>
            </thead>

            <tbody>                 
                <tr
                className="text-center h-10 bg-blue-200 border-2"
                key={bno}>               
                    <td className="w-10 border-2 ">{board.bno}</td>
                    <td className="w-96 border-2 hover:underline hover:cursor-pointer">
                        {board.title}&nbsp;&nbsp;
                    </td>
                    <td className="w-10 border-2 ">{board.writer}</td>
                    <td className="w-10 border-2 ">{board.regDate}</td>
                </tr>
            </tbody>               
        </table>
        
        // <div>
        //     <div>
        //         NO. : {board.bno}
        //     </div>
        //     <div>
        //         TITLE : {board.title}
        //     </div>
        //     <div>
        //         {board.content}
        //     </div>
        //     <div>
        //         WRITER : {board.writer}
        //     </div>
        //     <div>
        //         REGDATE : {board.regDate}
        //     </div>
        // </div>
     );
     
}
 
export default ReadComponent;