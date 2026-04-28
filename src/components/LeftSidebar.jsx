import Link from "next/link";
import CategoryList from "./CategoryList";

export default async function LeftSidebar() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  const categories = data.data.news_category;
  // console.log(categories);
  return (
    <div className="space-y-5">
      <h1 className="font-bold">All Category</h1>
      <div className="flex flex-col gap-5">
        <CategoryList categories={categories} />
      </div>
    </div>
  );
}
