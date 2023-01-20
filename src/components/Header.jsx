import { IconMenu2 } from "@tabler/icons";
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
              href="/docs"
              data-bcup-haslogintext="no"
            >
              Account
            </a>
            <a
              className="flex items-center text-lg font-semibold text-slate-600 sm:text-sm cursor-not-allowed opacity-80"
              href="#"
              data-bcup-haslogintext="no"
            >
              Support
            </a>
          </nav>

          <button
            className="flex items-center space-x-2 md:hidden bg-slate-100 text-slate-800 hover:bg-slate-100 py-2 px-2"
            data-bcup-haslogintext="no"
          >
            <span>
              <IconMenu2  strokeWidth={2}/>
            </span>
          </button>

        </div>
        <button
          type="button"
          id="radix-:R17mje:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          className="flex items-center gap-2 overflow-hidden focus:ring-2 focus:ring-brand-900 focus:ring-offset-2 focus-visible:outline-none"
          data-bcup-haslogintext="no"
        >
          <span className="flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-slate-100"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
