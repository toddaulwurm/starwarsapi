import { useParams } from "react-router-dom";
import React from "react";
    
const Number = (props) => {
    const { int } = useParams();
    
    return (
    <h1 style={{color: "yellow"}}>Welcome to the number {int}!</h1>
    );
}
export default Number