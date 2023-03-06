import{useTranslation} from "react-i18next";
import Menu from "./../Layouts/Dashboard/MobileNav/Menu";

function Header() {
  const {t}=useTranslation();
  return (
    <div className="md:hidden sticky top-0 z-40 bg-white">
       {/* <span className="font-bold text-2xl sm:inline-block mb-3 mx-6">Imagine</span> */}
      <Menu/>
    </div>
  );
}

export default Header;
