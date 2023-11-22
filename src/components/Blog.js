import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Blog.css";

const Blog = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="my-[80px] flex flex-col gap-5">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="w-full">
            <div className="max-w-[500px] w-11/12 mx-auto flex-col gap-1 flex justify-center">
              <p className="font-bold text-lg">{post.title}</p>
              <p>
                Made by{" "}
                <span className="italic font-semibold mr-2">
                  {post.author}{" "}
                </span>{" "}
                <span className="font-semibold border-black border-b-4  border-dotted">
                  {post.category}
                </span>
              </p>
              <p>created on : <span className="italic font-semibold">{post.date}</span></p>
              <p className="font-['Lato']">{post.content}</p>
              <div className="flex flex-row gap-2 flex-wrap text-xs underline text-[#0000ff]">
                {post.tags.map((tag,index) => (
                  <div key={index}>{`#${tag}`}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
