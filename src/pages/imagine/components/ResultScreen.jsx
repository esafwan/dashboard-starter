import React from "react";

function ResultScreen({url}){
    return (
    <div className="p-2">
        <img src={url} className="w-full h-full"/>
    </div>)
}

export default ResultScreen;