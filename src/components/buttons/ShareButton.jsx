import {useTranslation} from "react-i18next";
const ShareButton=()=>{
    const {t}=useTranslation();
    return(
        <button className="bg-gray-100 p-2 flex flex-row rounded-md text-sm hover:bg-gray-200">
            {t("Share")}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share-3" width="21" height="21" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"></path>
            </svg>
        </button>
    );
};

export default ShareButton;