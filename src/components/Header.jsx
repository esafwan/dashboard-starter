import {Link} from "react-router-dom";
import AccountNav from "./../Layouts/Dashboard/AccountNav";
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
            <Link
              className="flex items-center text-lg font-semibold text-slate-600 sm:text-sm"
              to="#"
              data-bcup-haslogintext="no"
            >
              Account
            </Link>
          </nav>
        </div>
        <AccountNav />
      </div>
    </header>
  );
}

export default Header;
