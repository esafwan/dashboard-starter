import {
  IconHomeInfinity,
  IconHome2,
  IconArmchair,
  IconWand,
  IconSettings2,
  IconHistory,
  Icon3dCubeSphere
} from "@tabler/icons";

function NavVertical() {
  return (
    <nav className="grid items-start gap-2">
      <div>
      
        <a href="/dashboard" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 bg-slate-200 mb-1">
            <IconHome2 className="mr-2" />
            <span>Dashboard </span>
          </span>
        </a>
        <a href="/" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent">
            <IconWand className="mr-2" />

            <span>Imagine</span>
          </span>
        </a>
        <a href="/dashboard" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent">
            <Icon3dCubeSphere className="mr-2" />
            <span>Elevation </span>
          </span>
        </a>
        <a href="/" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent">
            <IconArmchair className="mr-2" />
            <span>Interior</span>
          </span>
        </a>        
        <a href="/dashboard/billing" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent">
            <IconHistory className="mr-2" />
            <span>History</span>
          </span>
        </a>
        <a href="/dashboard/settings" data-bcup-haslogintext="no">
          <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transparent">
            <IconSettings2 className="mr-2" />
            <span>Settings</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
export default NavVertical;
