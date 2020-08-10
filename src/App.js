import React, { useState } from "react";

import PostCards from "./components/Posts/PostCards";
// import SearchBar from "./components/SearchBar/SearchBar";

import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // const [searchBar, setSearchBar] = useState(searchBar);
  const [liked, setLiked] = useState(false);

  const likePost = (postId, liked) => {
    setPosts(
      posts.map((i) => {
        if (i.id === postId) {
          if(liked) {
            i.likes = i.likes + 1;
            setLiked(true);
          } else {
            i.likes = i.likes - 1;
            setLiked(false);
          }
        }
        return i;
      })
    );
  };

  return (
    <div className="App">
      {/* <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} /> */}
      <PostCards likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
