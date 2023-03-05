function MainButton({text,onClickHandler}){
    return ( 
        <button 
            className="items-center rounded-md border border-transparent bg-slate-900 px-4 leading-8 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            onClick={onClickHandler}>
                {text}
        </button>);
}

export default MainButton;