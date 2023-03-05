function ButtonHolder({children}){
    return(
        <div className="p-4 bg-nav-blue flex justify-end  border border-x-0 border-b-0 border-black border-dashed  border-slate-200">
           {children}
        </div>
    );
}

export default ButtonHolder;