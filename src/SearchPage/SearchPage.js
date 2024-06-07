import React from "react";
import { useParams } from "react-router-dom";

function SearchPage(){
    const { searchName } = useParams();
    console.log(searchName);
    return(
        <div>Hello</div>
    )
}

export default SearchPage