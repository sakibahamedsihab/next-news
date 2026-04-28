import Image from "next/image";
import React from "react";

// The data structure extracted from your JSON screenshot

const NewsCard = ({ item }) => {
  const { title, author, image_url, details, rating, total_view } = item;

  // Extract just the date part (YYYY-MM-DD) from the datetime string
  // Extract date safely using Optional Chaining and Ternary Operator
  const formattedDate = author?.published_date
    ? author.published_date.split(" ")[0]
    : "Unknown Date";

  // Truncate the details text to create the preview snippet
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-50 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Image
            src={author.img}
            alt={author?.name || "Author"}
            width={10}
            height={10}
          />
          <div>
            <h3 className="text-gray-800 font-semibold text-sm">
              {author.name}
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">{formattedDate}</p>
          </div>
        </div>

        {/* Header Actions (Bookmark & Share) */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </button>
          <button className="hover:text-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4">
          {title}
        </h2>

        <Image src={image_url} alt="Article thumbnail" width={10} height={10} />

        <p className="text-gray-600 text-sm leading-relaxed mb-1">
          {truncateText(details, 260)}
        </p>

        <button className="text-orange-500 font-semibold text-sm hover:underline mb-4">
          Read More
        </button>

        {/* Footer Section */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-medium text-sm ml-1">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1.5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="font-medium text-sm text-gray-600">
              {total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
