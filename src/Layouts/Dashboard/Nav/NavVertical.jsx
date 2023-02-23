import {
  IconHomeInfinity,
  IconHome2,
  IconArmchair,
  IconWand,
  IconSettings2,
  IconHistory,
  Icon3dCubeSphere
} from "@tabler/icons";
import {NavLink} from "react-router-dom";

function NavVertical() {
  const active =
    "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 bg-slate-200 mb-1-slate-200";
  const inactive =
    "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent";
  return (
    <nav className="grid items-start gap-2">
      <div>
        <NavLink to="/dashboard" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconHome2 className="mr-2" />
            <span>Dashboard </span>
        </NavLink>
        <NavLink to="/imagine" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconWand className="mr-2" />
            <span>Imagine</span>
        </NavLink>
        <NavLink to="/elevation" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <Icon3dCubeSphere className="mr-2" />
            <span>Elevation </span>
        </NavLink>
        <NavLink to="/interior" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconArmchair className="mr-2" />
            <span>Interior</span>
        </NavLink>        
        <NavLink to="/history" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconHistory className="mr-2" />
            <span>History</span>
        </NavLink>
        <NavLink to="/settings" data-bcup-haslogintext="no" className={({isActive})=>isActive?active:inactive}>
            <IconSettings2 className="mr-2" />
            <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
export default NavVertical;
