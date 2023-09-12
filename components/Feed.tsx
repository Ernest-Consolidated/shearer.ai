"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { IPost } from "@app/profile/page";

interface IPromptCardList {
  data: any[];
  handleTagClick: (e: any) => void;
}

const PromptCardList = ({ data, handleTagClick }: IPromptCardList) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post?._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchText) {
      const lowerCasedSearchText = searchText.toLowerCase();
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.prompt.toLowerCase().includes(lowerCasedSearchText) ||
            post.tag.toLowerCase().includes(lowerCasedSearchText) ||
            post.creator.username.toLowerCase().includes(lowerCasedSearchText)
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [searchText, posts]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
