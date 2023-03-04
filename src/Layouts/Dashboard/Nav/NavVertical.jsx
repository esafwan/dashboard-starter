import {
  IconHome2,
  IconSchool,
  IconWand,
  IconSettings2,
  IconHistory,
  Icon3dCubeSphere
} from "@tabler/icons";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function NavVertical() {
  const {t}=useTranslation();
  const active =
    "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 bg-slate-200 mb-1-slate-200";
  const inactive =
    "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent";
  return (
    <nav className="grid items-start gap-2">
      <div>
        <NavLink to="/dashboard" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconHome2 className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("dashboard")}</span>
        </NavLink>
        <NavLink to="/write" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconWand className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("write")}</span>
        </NavLink>
        <NavLink to="/analyze" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <Icon3dCubeSphere className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("analyze")}</span>
        </NavLink>
        <NavLink to="/explain" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconSchool className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("explain")}</span>
        </NavLink>
        <NavLink to="/imagine" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 icon icon-tabler icon-tabler-crystal-ball" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6.73 17.018a8 8 0 1 1 10.54 0"></path>
          <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z"></path>
          <path d="M11 7a3 3 0 0 0 -3 3"></path>
        </svg>
            <span className="mx-3 text-2xl md:text-sm">{t("Imagine")}</span>
        </NavLink>       
        {/* <NavLink to="/history" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconHistory className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("history")}</span>
        </NavLink>
        <NavLink to="/settings" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconSettings2 className="mr-2" />
            <span className="mx-3 text-2xl md:text-sm">{t("settings")}</span>
        </NavLink> */}
      </div>
    </nav>
  );
}
export default NavVertical;
