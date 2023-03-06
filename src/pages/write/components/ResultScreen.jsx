import React,{useRef,useLayoutEffect, useEffect} from "react";

function ResultScreen({text,setResponseText}){
    const MIN_TEXTAREA_HEIGHT=35;
    const textareaRef = useRef(null);
    const onChange=(event)=>setResponseText(event.target.value);

    useEffect(()=>{
        textareaRef.current.style.height="inherit";
        textareaRef.current.style.height=`${Math.max(textareaRef.current.scrollHeight,MIN_TEXTAREA_HEIGHT)}px`;
    },[text]);

    return (
        <div className="flex flex-col" dir="ltr">
             <textarea
                onChange={onChange}
                ref={textareaRef}
                style={{
                    minHeight:MIN_TEXTAREA_HEIGHT,
                    boxShadow:"none"
                }}
                className="resize-none border-0 outline-none"
                value={text}
                />
        </div>
    );
}

export default ResultScreen;