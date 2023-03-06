import { NavVertical } from "./../Nav";
function Sidebar() {
  return (
    <aside className="w-[200px] flex-col md:flex hidden bg-nav-blue h-screen pt-4 px-6 shadow-inner">
      <span className="hidden font-bold text-2xl sm:inline-block mb-3 mx-3">Imagine</span>
      <NavVertical />
    </aside>
  );
}
export default Sidebar;
