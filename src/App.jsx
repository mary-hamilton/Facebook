import PostCard from "./PostCard";
import {useEffect, useState} from "react";
import PostInput from "./PostInput";
import {getPostsApi} from "./firebase-client";

const App = () => {


  let [postList, updatePostList] = useState([]);

  const getPosts = () => {
    getPostsApi().then(updatePostList);
  }

  useEffect(() => {
      getPosts()},[]
  )


  return (
      <>
        <PostInput getPosts={getPosts}/>
        {postList.map((post, i) => <PostCard key={i} post={post} getPosts={getPosts}/>).reverse()}
      </>
  );
};

export default App;
