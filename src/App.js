import React, { useState } from "react";

import PostCards from "./components/Posts/PostCards";
// import SearchBar from "./components/SearchBar/SearchBar";

import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // const [searchBar, setSearchBar] = useState(searchBar);
  const [liked, setLiked] = useState(0);

  const likePost = (postId, liked) => {
    setPosts(
      posts.map((i) => {
        if (i.id === postId) {
          if (liked = 0) {
            i.likes = i.likes + 1;
            setLiked(liked = 1);
          } else if (liked = 1) {
            i.likes = i.likes - 1;
            setLiked(liked = 0);
          }
          // if(liked === true) {
          //   i.likes = i.likes + 1;
          //   setLiked(!liked);
          // } else if (liked === false) {
          //   i.likes = i.likes - 1;
          //   setLiked(!liked);
          // }
        }
        return i;
      })
    );
  };

  return (
    <div className="App">
      {/* <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} /> */}
      <PostCards likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
