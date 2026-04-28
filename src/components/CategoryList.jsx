"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryList({ categories }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col">
      {categories.map((item) => (
        <Link
          className={`${pathname === `/category/${item.category_id}` || (pathname === "/" && `${item.category_id}` === "08") ? "p-4 font-bold text-center bg-[#E7E7E7]" : "p-4 text-center"}`}
          href={`/category/${item.category_id}`}
          key={item.category_id}
        >
          {item.category_name}
        </Link>
      ))}
    </div>
  );
}
