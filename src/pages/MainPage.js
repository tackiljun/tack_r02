import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";
import TestLayout from "../layouts/TestLayout";

const MainPage = () => {

    //console.log("--------------- MAIN ---------------")

    return ( 
        <BasicLayout>
            <h2 className="m-auto text-center">MAIN PAGE</h2>

            <TodoList></TodoList>

            <div>
                <img className="mx-auto" src={require("../images/mainimg1.jpg")} />
            </div>
        </BasicLayout>
     );
}
 
export default MainPage;