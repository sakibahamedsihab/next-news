import fb from "@/assets/fb.png";
import x from "@/assets/twitter.png";
import insta from "@/assets/instagram.png";
import Image from "next/image";

const social = [
  {
    logo: fb,
    text: "Facebook",
  },
  {
    logo: x,
    text: "Twitter",
  },
  {
    logo: insta,
    text: "Instagram",
  },
];
export default function RightSidebar() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold">Login With</h1>
      <div className="flex flex-col gap-3">
        <button className="btn border border-blue-400 text-blue-400 bg-transparent">
          Login with Google
        </button>
        <button className="btn border border-gray-800 text-gray-800 bg-transparent">
          Login with Github
        </button>
      </div>

      <h1 className="font-bold">Find Us on</h1>
      <div className="flex flex-col gap-1">
        {social.map((item, index) => (
          <div key={index} className="flex gap-3 p-3 items-center border border-gray-300">
            <div className="w-7.5 h-7.5 rounded-full bg-base-200 flex items-center justify-center">
              <Image
                src={item.logo}
                alt="logo"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
