export interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string | null;
  comments: number;
  likes: number;
}
