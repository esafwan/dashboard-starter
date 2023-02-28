import { NavVertical } from "./../Nav";
function Sidebar() {
  return (
    <aside className="w-[200px] flex-col md:flex hidden bg-white">
      <NavVertical />
    </aside>
  );
}
export default Sidebar;
