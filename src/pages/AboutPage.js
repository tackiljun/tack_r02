import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import BasicLayout from "../layouts/BasicLayout";
import TestLayout from "../layouts/TestLayout";

const AboutPage = () => {

    //console.log("--------------- ABOUT ---------------")

    return ( 
        <BasicLayout>
            <h2>ABOUT PAGE</h2>

            <TodoInput></TodoInput>

            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>

        </BasicLayout>
     );
}
 
export default AboutPage;