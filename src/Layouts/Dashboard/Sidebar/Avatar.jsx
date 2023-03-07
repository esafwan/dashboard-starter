import {useContext} from "react";
import AuthContext from "./../../../Context/AuthContext";
import {signOut,auth} from "./../../../firebase";

function Avatar(){
    const {user}=useContext(AuthContext);
    const calcName=() => {
        const maxLength=9;
        const firstName=user.displayName.split(' ')[0];
        return firstName.length>maxLength?
            firstName.substring(0,maxLength)+"..."
            :firstName;
    };
    const calcEmail=()=>{
        const maxLength=13;
        return user.email.substring(0,maxLength)+"...";
    };
    return(
        <div className="mb-4 px-1.5 py-1 bg-white border rounded-lg flex justify-between shadow-sm">
            <img src={user.photoURL} className="relative inline-block h-12 w-12 rounded-full object-cover object-center"/>
            <div className="ml-2">
                <p className="font-semibold text-sm mt-2 text-nav-blue-active" title={user.displayName}>{calcName()}</p>
                <p className="text-xs text-nav-blue-active" title={user.email}>{calcEmail()}</p>
            </div>
            <button className="text-xs" onClick={async ()=>await signOut(auth)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout text-nav-blue-active" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                    </svg>
            </button>
        </div>
    );
}

export default Avatar;