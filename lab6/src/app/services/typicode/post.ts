export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostDb = Map<number, Post>;
