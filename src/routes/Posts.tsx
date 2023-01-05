import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { BlogPost } from "../Components/BlogPost";
import { Modal } from "../Components/Modal";
import { MyCombobox } from "../Components/ComboBox";
import { Beers } from "../Components/Beers";
import { useState } from "react";

export type PostType = {
  id: number;
  title: string;
  content: string;
};

export async function postsLoader() {
  const result = await axios.get<PostType[]>("http://localhost:3000/posts");
  return result.data;
}
type States = "light" | "dark" | "hot-pink";
type Input = {
  state: States;
  setState: React.Dispatch<React.SetStateAction<States>>;
};

export function Posts() {
  const posts = useLoaderData() as PostType[];
  const [state, setState] = useState<States>("light");
  const [dark, setDark] = useState(false);
  return (
    <div className={state}>
      <Modal state={state} setState={setState}></Modal>
      <h2 className="text-4xl font-bold mb-4">Posts</h2>
      <div className="flex flex-wrap gap-3 mb-3">
        {posts.map((post) => (
          <Link
            className="underline text-indigo-600 dark:bg-pink-300"
            key={post.id}
            to={`/blog/${post.id}`}
          >
            <BlogPost state={state} title="Blog Post 1"></BlogPost>
          </Link>
        ))}
      </div>
      <MyCombobox listOfPosts={posts} />
      <Beers></Beers>
    </div>
  );
}
