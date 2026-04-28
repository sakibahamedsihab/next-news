import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container grid grid-cols-[1fr_2fr_1fr] gap-5">
        <LeftSidebar />
        <div className="space-y-5">
          <h1 className="font-bold">Dragon News Home</h1>
          {children}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}
