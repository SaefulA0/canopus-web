import ButtonExample from "../../components/buttons/btnExample";
import DropdownExample from "../../components/dropdowns/dropdownExample";

export default function Test() {
  return (
    <main className="p-12">
      {/* cara manggil tombol */}
      <div className="flex-col">
        Tombol yang ada di folder components
        <br />
        <ButtonExample />
      </div>
      {/* cara manggil dropdown */}
      <div className="flex-col">
        Dropdown yang ada di folder components
        <br />
        <DropdownExample />
      </div>
    </main>
  );
}
