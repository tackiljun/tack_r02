import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {
    //console.log("--------------- ABOUT ---------------")

    const {loginInfo} = useCustomLogin()

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