import Image from "next/image";
import React from "react";
import { NewsInterface } from "../utils/Interfaces";

const NewsCard: React.FC<NewsInterface> = ({ title, urlToImage, author }) => {
  return (
    <div className="group relative w-64 text-white hover:cursor-pointer shadow-xl dark:shadow-none pb-3">
      <div className="overflow-hidden">
        <Image
          src={urlToImage ? urlToImage : ""}
          width={10000}
          height={10000}
          alt={title}
          className="w-full h-36 object-cover"
        />
      </div>

      <h1 className="text-black dark:text-white text-md mt-4 font-serif mx-2">
        {title}
      </h1>
      <h1 className="text-black dark:text-white text-sm mt-4 font-serif mx-2 mb-6">
        Author: {author}
      </h1>
      <div className="flex justify-end mr-3 gap-2">
        <button className="rounded bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white font-bold">
          Edit
        </button>
        <button className="rounded bg-red-500 hover:bg-red-600 px-3 py-1 text-white font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
