import { useRef, useState } from "react"
import { postProduct } from "../../api/productAPI"


const initState = {
    pname:'Ice Coffee',
    pdesc:'Coffee.....',
    price:'4000'
}


const RegisterComponent = ({moveList}) => {

    const fileRef = useRef()

    const [product, setProduct] = useState({...initState})

    const handleChange = (e) => {
        product[e.target.name] = e.target.value

        setProduct({...product})
    }

    const handleClickSave = (e) => {
        
        const formData = new FormData();

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
        }

        postProduct(formData).then(data => {
            const rno = data.result
            alert(`${rno}번 상품이 등록되었습니다.....`)
            moveList()
        }) 
    }

    const handleClickClear = (e) => {
        
        fileRef.current.value = ''
    }

    return ( 

        <div className="m-2 p-2 ">
            
            <div className="m-auto p-2 w-1/3 bg-blue-200 border-2">
                NAME <input 
                     type='text' 
                     name='pname' 
                     value={product.pname} 
                     onChange={handleChange}>
                     </input>
            </div>
            <div className="m-auto p-2 w-1/3 bg-blue-200 border-2">
                DRSC <input 
                      type='text' 
                      name='pdesc' 
                      value={product.pdesc} 
                      onChange={handleChange}>
                      </input>
            </div>
            <div className="m-auto p-2 w-1/3 bg-blue-200 border-2">
                PRICE <input 
                      type='number' 
                      name='price' 
                      value={product.price} 
                      onChange={handleChange}>
                      </input>
            </div>

            <div className="m-auto p-2 w-1/3 bg-blue-200 border-2"> 
                <input 
                className="m-auto items-center" 
                type='file' 
                ref={fileRef} 
                multiple name='images' 
                onChange={handleChange}>
                </input>
            </div>

            <div className="m-auto p-2 w-1/3 bg-blue-200 border-2">
                <button 
                className="m-2 p-2 bg-blue-300 border-2 " 
                onClick={handleClickSave}>
                    SAVE
                </button>
                <button 
                className="m-2 p-2 bg-blue-300 border-2" 
                onClick={handleClickClear}>
                    CLEAR FILES
                </button>
            </div>
        </div>
     );
}
 
export default RegisterComponent;