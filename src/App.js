import React, { useState } from "react";

import PostCards from "./components/Posts/PostCards";
// import SearchBar from "./components/SearchBar/SearchBar";

import dummyData from "./dummy-data";
import "./App.css";

import Test from "./components/Posts/Test";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // const [searchBar, setSearchBar] = useState(searchBar);
  // const [liked, setLiked] = useState(true);


  const likePost = (postId, liked, index) => {
    setPosts(
      posts.map((data, liked, index) => {
        if (data.id === postId) {
          // if (liked = 0) {
          //   i.likes = i.likes + 1;
          //   setLiked(liked = 1);
          // } else if (liked = 1) {
          //   i.likes = i.likes - 1;
          //   setLiked(liked = 0);
          // }
          // if(liked === true) {
          //   i.likes = i.likes + 1;
          //   setLiked(!liked);
          // } else if (liked === false) {
          //   i.likes = i.likes - 1;
          //   setLiked(!liked);
          // }
          // {
          //   liked
          //     ? (data.likes = data.likes - 1)
          //     : (data.likes = data.likes + 1);
          // }
          // console.log(liked);
          // setLiked(true);
        }
        return data;
      })
    );
  };

  return (
    <div className="App">
      <Test />
      {/* <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} /> */}
      <PostCards likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;

