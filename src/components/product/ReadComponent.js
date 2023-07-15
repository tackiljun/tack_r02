import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";


const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  images: []
}


const ReadComponent = ({pno, moveModify, moveList}) => {

  const [product, setProduct] = useState(initState)

  useEffect(() => {

    getProduct(pno).then(data => {
      setProduct(data)
    }).catch(e => {
      console.log(e)
      moveList()
    })

  }, [pno])

  return (
    
    <div className="m-2 p-2">
      <div className="m-auto p-2 w-1/5 bg-blue-200 border-2">
        {product.pname}
      </div>
      <div className="m-auto p-2 w-1/5 bg-blue-200 border-2">
        {product.pdesc}
      </div>
      <div className="m-auto p-2 w-1/5 bg-blue-200 border-2">
        {product.price}
      </div>
      <div className="m-2 p-2 bg-blue-200 border-2">
        <ul className="list-none">
          {product.images.map( (fname, idx) => 
            <li key={idx}>
              <img className="inline-block" src={`http://localhost/${fname}`}/>
            </li>
          )}
        </ul>
      </div>

      <div>
      <button 
        className="bg-red-300 border-2 m-2 p-2 font-bold"
        onClick={() => moveModify(product.pno)}>
          MODIFY
        </button>
        <button 
        className="bg-blue-300 border-2 m-2 p-2 font-bold"
        onClick={moveList}>
          LIST
        </button>
      </div>
    </div>
  );
}

export default ReadComponent;