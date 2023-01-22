import { useEffect } from "react";
import { IconMenu2 } from "@tabler/icons";
import AccountNav from "./../components/global/AccountNav";
import {
  auth,
  signInWithGooglePopup,
  onAuthStateChanged,
  signOut,
} from "./../firebase";
function Header() {


  const checkUser = async () => {
    const response = await auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  };

  const logOut = async () => {
    const response = await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white pz-4 ">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4 ">
        <div className="flex gap-6 md:gap-10">
          <a
            className="hidden items-center space-x-2 md:flex"
            href="/"
            data-bcup-haslogintext="no"
          >
            <span className="hidden font-bold sm:inline-block">Imagine</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            
            <a
              className="flex items-center text-lg font-semibold text-slate-600 sm:text-sm"
              href="#"
              data-bcup-haslogintext="no"
              onClick={checkUser}
            >
              Account
            </a>
            <a
              className="flex items-center text-lg font-semibold text-slate-600 sm:text-sm cursor-not-allowed opacity-80"
              href="#"
              data-bcup-haslogintext="no"
              onClick={logOut}
            >
              Logout
            </a>
          </nav>
          <div></div>
        </div>
        <AccountNav />
      </div>
    </header>
  );
}

export default Header;
