import { NavVertical } from "../global/Nav";
function Sidebar() {
  return (
    <aside className="hidden w-[200px] flex-col md:flex">
      <NavVertical />
    </aside>
  );
}
export default Sidebar;
