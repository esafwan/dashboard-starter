import React,{useRef,useEffect} from "react";

function ResultScreen({text}){
    const MIN_TEXTAREA_HEIGHT=35;
    const textareaRef = useRef(null);
    // const [value,setValue]=useState(text);
    // const onChange=(event)=>setValue(event.target.value);

    useEffect(()=>{
        textareaRef.current.style.height="inherit";
        textareaRef.current.style.height=`${Math.max(textareaRef.current.scrollHeight,MIN_TEXTAREA_HEIGHT)}px`;
    },[text]);

    return (
        <div className="flex flex-col" dir="ltr">
             <textarea
                readOnly
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