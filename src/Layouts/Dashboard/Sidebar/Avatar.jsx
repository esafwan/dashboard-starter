import {useContext} from "react";
import AuthContext from "./../../../Context/AuthContext";
import {signOut,auth} from "./../../../firebase";

function Avatar(){
    const {user}=useContext(AuthContext);
    const calcEmail=()=>{
        const maxLength=10;
        return user.email.substring(0,maxLength)+'...';
    }
    return(
        <div className="mb-4 px-1.5 py-1 bg-white border rounded-lg flex shadow-sm">
            <img src={user.photoURL} className="w-14 rounded-full"/>
            <div className="ml-2">
                <p className="font-semibold text-sm mt-2" title={user.email}>{calcEmail()}</p>
                <button className="font-medium text-xs underline decoration-1 decoration-solid decoration-black" onClick={async ()=>await signOut(auth)}>Logout</button>
            </div>
        </div>
    );
}

export default Avatar;