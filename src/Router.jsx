import {Link, Route, Routes, useNavigate} from "react-router-dom";
import PostList from "./PostList";
import PostInput from "./PostInput";
import {useEffect, useState} from "react";
import PostDetail from "./PostDetail";
import MyPosts from "./MyPosts";
import Login from "./Login";
import SignUp from "./SignUp";
import {Button, Grid, Typography} from "@mui/material";
import {css} from "@emotion/css";
import Logout from "./Logout";

const Router = ({client}) => {

    const linkCSS = css`
        background-color: ${client.randomColour()};
        a, a:visited {
          color: ${client.randomColour()};
          text-decoration: none;
        }
    `

    let [postList, updatePostList] = useState([]);

    const getPosts = () => {
        client.getPostsApi().then(({data}) => {
            updatePostList(data)
        });
    }

    useEffect(() => {
            getPosts()
        }, []
    )

    const navigate = useNavigate();

    return (
        <>
            <header>
                <Typography style={{backgroundColor: `${client.randomColour()}`}} variant="h2" p={2}>Bad Facebook :(</Typography>
                <Typography style={{backgroundColor: `${client.randomColour()}`}} variant="h5" p={2}>{client.myUsername ? `Logged in as ${client.myUsername}` : `Please log in or sign up to start.`}</Typography>
                {client.myUsername &&
                <Logout client={client}/>}
                <Grid container flex spacing={3} pb={3} className={linkCSS}>
                    {client.myUsername &&
                    <Grid style={{backgroundColor: `${client.randomColour()}`}} item><Typography><Link to="/post-input">Make A New Post</Link></Typography></Grid>}
                    <Grid style={{backgroundColor: `${client.randomColour()}`}} item><Typography><Link to="/">See All Posts</Link></Typography></Grid>
                    {client.myUsername &&
                    <Grid style={{backgroundColor: `${client.randomColour()}`}} item><Typography><Link to="/my-posts">My Posts</Link></Typography></Grid>}
                    <Grid style={{backgroundColor: `${client.randomColour()}`}} item><Typography><Link to="/login">Login</Link></Typography></Grid>
                    <Grid style={{backgroundColor: `${client.randomColour()}`}} item><Typography><Link to="/signup">Create Account</Link></Typography></Grid>
                    <Button variant="contained" onClick={client.deleteAccount}>Delete Your Account</Button>
                </Grid>
            </header>
            <main>
                <Routes>
                    <Route path="/signup" element={(<SignUp client={client}/>)}/>
                    <Route path="/login" element={(<Login client={client}/>)}/>
                    <Route path="/" element={(
                        <PostList client={client} postList={postList} getPosts={getPosts}
                                  navigate={navigate}/>)}/>
                    <Route path="/post-input" element={(
                        <PostInput client={client} postList={postList} getPosts={getPosts}
                                   navigate={navigate}/>)}/>
                    <Route path="/my-posts" element={(
                        <MyPosts client={client} postList={postList} getPosts={getPosts}
                                 navigate={navigate}/>)}/>
                    <Route path="/posts/:postid"
                           element={(<PostDetail client={client} postList={postList}
                                                 getPosts={getPosts}/>)}/>
                </Routes>
            </main>
        </>
    );
};

export default Router;