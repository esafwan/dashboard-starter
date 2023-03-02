import {useTranslation} from "react-i18next";
const CopyButton=({text})=>{
    const {t}=useTranslation();
    return(
        <button className="bg-gray-100 p-2 mx-5 flex flex-row rounded-md text-sm hover:bg-gray-200"
                onClick={()=>navigator.clipboard.writeText(text)}>
                    {t("Copy")}
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-check" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                        <path d="M9 14l2 2l4 -4"></path>
                    </svg>
        </button>
    );
};

export default CopyButton;