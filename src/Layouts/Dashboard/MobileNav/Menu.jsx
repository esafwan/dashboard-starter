import {useState} from "react";
import { NavVertical } from "../Nav"
import Avatar from "./../Sidebar/Avatar";
const Menu=()=>{
    console.log(window.innerWidth);
    const [open,setDisplay]=useState(false);
    return (
    <div className="md:hidden flex justify-between">
              <nav onClick={()=>setDisplay((open)=>!open)}>
                  <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white">
                      <span className="sr-only">Open main menu</span>
                      <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                          <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open?"rotate-45":"-translate-y-1.5"}`}/>
                          <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${open && "opacity-0"} `}/>
                          <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${open?"-rotate-45":"translate-y-1.5"}`}></span>
                      </div>
                  </button>
              </nav>
              <span className={`${open?"inline-block":"hidden"} font-bold text-2xl my-1.5 mx-6`}>Imagine</span>
        {open && (<div className="bg-white absolute top-11 h-screen w-full px-4 py-4 flex flex-col justify-between"
        onClick={()=>setDisplay(false)}>
            <NavVertical/>
                <div className="mb-10">
                    <Avatar/>
                </div>
        </div>)}
    </div>);
}

export default Menu;