import { useEffect } from "react";
import { IconMenu2 } from "@tabler/icons";
import AccountNav from "./../components/global/AccountNav";
function Header() {

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
              onClick={console.log("ok")}
            >
              Account
            </a>
            <a
              className="flex items-center text-lg font-semibold text-slate-600 sm:text-sm cursor-not-allowed opacity-80"
              href="#"
              data-bcup-haslogintext="no"
              onClick={console.log("ok")}
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
