import React,{useState} from "react";

function InputQuery(){
    return (
        <div>
            <div className="text-4xl font-bold">Write</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea name="queryText" 
                rows="2"
                defaultValue="The nation wants to know"
                className="border-0 resize-none"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2">
                    <button className="h-9 items-center rounded-md border float-right
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2">
                        Create</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;