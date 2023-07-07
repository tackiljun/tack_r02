import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="m-4 p-4 bg-black text-2xl text-white flex justify-center">
                <div className="underline font-extrabold m-2 p-2">LIST</div>
                <div className="underline font-extrabold m-2 p-2">REGISTER</div>
            </div>
            <div className="h-[50vh] bg-black w-full border-2">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;