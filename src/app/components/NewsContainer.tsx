import axios, { AxiosResponse } from "axios";
import React from "react";
import { newsApiUri } from "../utils/News";
import { NewsInterface } from "../utils/Interfaces";
import NewsCard from "./NewsCard";
import AddNews from "./AddNews";

const NewsContainer = async () => {
  const response: AxiosResponse = await axios.get(newsApiUri);

  const newsData: NewsInterface[] = response.data;

  return (
    <div className="p-10">
      <div className="flex justify-between px-14">
        <AddNews />
        <AddNews />
      </div>
      <div className=" flex flex-wrap justify-center gap-3">
        {newsData.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsContainer;
