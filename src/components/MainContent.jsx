import NewsCard from "./NewsCard";

export default function MainContent({ item }) {
  return (
    <div className="flex flex-col gap-5">
      <NewsCard key={item.id} item={item} />
    </div>
  );
}
