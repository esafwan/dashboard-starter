import { NavVertical } from "./../Nav";
import Avatar from "./Avatar";
function Sidebar() {
  return (
    <aside className="w-[220px] flex-col md:flex justify-between hidden bg-nav-blue h-screen pt-4 px-6 shadow-inner">
      <div>
        <span className="hidden font-bold text-2xl sm:inline-block mb-3 mx-3">Imagine</span>
        <NavVertical />
      </div>
      <Avatar/>
    </aside>
  );
}
export default Sidebar;
