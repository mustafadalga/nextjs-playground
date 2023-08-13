"use client";
import React, { useEffect, useState } from "react";
import { Post } from "../types";
import axios from "axios";
import Card from "./Card";

const fetchPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return [];
  }
};

export default function Cards() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  const handlePosts = async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  };
  useEffect(() => {
    handlePosts();
  }, []);
  return (
    <div>
      <div className="grid gap-8">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} description={post.body} />
        ))}
      </div>
    </div>
  );
}
