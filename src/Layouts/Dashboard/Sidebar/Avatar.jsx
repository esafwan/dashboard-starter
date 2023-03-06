import {useContext} from "react";
import PersistContext from "./../../../Context/PersistContext";
import {signOut,auth} from "./../../../firebase";

function Avatar(){
    const {user}=useContext(PersistContext);
    return(
        <div className="mb-4 px-1 py-1 bg-white border rounded-lg flex justify-around">
            <img src={user.photoURL} className="w-14 rounded-full"/>
            <div className="flex flex-col items-end">
                <span className="font-semibold text-sm">Shahzad</span>
                <button className="text-sm" onClick={async ()=>await signOut(auth)}>Logout</button>
            </div>
        </div>
    );
}

export default Avatar;