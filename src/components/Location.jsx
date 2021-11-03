import { useParams } from "react-router-dom";
import React from "react";
    
const Location = (props) => {
    const { city } = useParams();
    
    return (
    <h1>Welcome to the city of {city}!</h1>
    );
}
export default Location