import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default async function MainHomePage() {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/category/08",
  );

  const data = await response.json();
  const news = data.data;
  return (
    <div className="flex flex-col gap-5">
      {news.map((item, index) => (
        <MainContent key={index} item={item} />
      ))}
    </div>
  );
}
