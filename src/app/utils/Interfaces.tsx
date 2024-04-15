export interface NewsInterface {
  id: number;
  sourceId?: number | null;
  sourceName?: string | null;
  author?: string | null;
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt?: string | null;
  content?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
