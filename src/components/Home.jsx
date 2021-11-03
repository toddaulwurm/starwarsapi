import React from "react";
import {
    useHistory
} from "react-router-dom";

const Home = props => {
    const history = useHistory();
    const goback = () => {
        history.goBack()
    }
    return (
    <div>
        <h1 style={{color: "red"}}>WELCOME</h1>
        <button onClick={goback}>Back</button>
    </div>)
}
export default Home;