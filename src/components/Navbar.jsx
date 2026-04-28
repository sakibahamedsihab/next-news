import userAvatar from "@/assets/user.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container flex justify-between items-center py-5">
      {" "}
      {/* container = max-widht: 1140 margin: 0 auto */}
      <div></div>
      <ul className="flex gap-5">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/career"}>Career</Link>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Image src={userAvatar} alt="User Avatar" width={40} height={40} />
        <Link href={"/login"}>
          <button className="btn bg-[#403F3F] text-white">Login</button>
        </Link>
      </div>
    </div>
  );
}
