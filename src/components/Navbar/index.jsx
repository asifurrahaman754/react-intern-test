import { ActionItem, FilterItem } from "components";

export default function Navbar() {
  return (
    <div className="nav-container d-flex justify-content-between px-4 py-3 align-items-center">
      <FilterItem />
      <ActionItem />
    </div>
  );
}
