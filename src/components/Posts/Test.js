import React, { useState } from "react";

const Test = () => {
  // const [searchBar, setSearchBar] = useState(searchBar);
  const [liked, setLiked] = useState(true);
  let toggle = () => {
    setLiked(!liked);
  };
  return (
    <div className="Button">
      {liked ? <h1>Liked</h1> : <h1>Unliked</h1>}
      <button onClick={toggle}>Button</button>
    </div>
  );
};

export default Test;
