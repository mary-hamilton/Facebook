
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import PostList from "./PostList";
import PostInput from "./PostInput";
import {useEffect, useState} from "react";
import {getPostsApi} from "./firebase-client";
import PostDetail from "./PostDetail";
import MyPosts from "./MyPosts";

const Router = () => {


    let [postList, updatePostList] = useState([]);
    const myUsername = "RosaT"

    const getPosts = () => {
        getPostsApi().then(updatePostList);
    }

    useEffect(() => {
        getPosts()},[]
    )

    const navigate = useNavigate();


    return (
    <>
      <header>
        <h1>Bad Facebook :(</h1>

        <ul>
          <li><Link to="/post-input">Make A New Post</Link></li>
            <li><Link to="/">See All Posts</Link></li>
            <li><Link to="/my-posts">My Posts</Link></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(<PostList postList={postList} myUsername={myUsername} getPosts={getPosts} navigate={navigate}/>)}/>
          <Route path="/post-input" element={(<PostInput postList={postList} myUsername={myUsername} getPosts={getPosts} navigate={navigate}/>)}/>
            <Route path="/my-posts" element={(<MyPosts postList={postList} myUsername={myUsername} getPosts={getPosts} navigate={navigate}/>)}/>
            <Route path="/posts/:postid" element={(<PostDetail postList={postList} myUsername={myUsername} getPosts={getPosts}/>)}/>
        </Routes>
      </main>
    </>
  );
};

export default Router;