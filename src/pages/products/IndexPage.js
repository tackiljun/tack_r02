import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {

    return ( 

        <BasicLayout>
            <div className="m-4 p-4 bg-blue-200 text-2xl border-2 flex justify-center">
                <div className="underline m-2 p-2 font-extrabold border-2">
                    LIST
                </div>
                <div className="underline m-2 p-2 font-extrabold border-2">
                    <Link to={'register'}>REGISTER</Link> 
                </div>
            </div>
            
            <div className="m-auto bg-blue-100 w-full border-2">
                <Outlet></Outlet>
            </div>
        </BasicLayout>

     );
     
}
 
export default IndexPage;