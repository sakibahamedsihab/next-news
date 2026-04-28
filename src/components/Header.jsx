import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-10 container">
      <Image src={logo} alt="Logo" style={{ width: "auto", height: "auto" }} />
      <p>Journalism Without Fear or Favour</p>
      <p>{date}</p>
    </div>
  );
}
