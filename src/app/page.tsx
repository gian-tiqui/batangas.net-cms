import axios, { AxiosResponse } from "axios";
import React from "react";
import { newsApiUri } from "./utils/News";
import { NewsInterface } from "./utils/Interfaces";
import NewsCard from "./components/NewsCard";

const Home = async () => {
  const response: AxiosResponse = await axios.get(newsApiUri);

  const newsData: NewsInterface[] = response.data;

  return (
    <div className="h-screen">
      <div className="h-16 grid grid-cols-5">
        <div className="col-span-5 shadow"></div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-1 shadow-2xl border"></div>
        <div className="col-span-4 overflow-auto p-10">
          <button className="bg-indigo-500 hover:bg-indigo-700 rounded px-5 py-2 text-white font-bold mb-3">
            Add news
          </button>
          <div className="flex flex-wrap gap-3">
            {newsData.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
