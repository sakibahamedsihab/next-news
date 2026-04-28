import NewsCard from "@/components/NewsCard";

export default async function CategoryPage({ params }) {
  const { category_id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  const news = data.data;
  console.log(news);
  return (
    <div className="flex flex-col gap-5">
      {news.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </div>
  );
}
