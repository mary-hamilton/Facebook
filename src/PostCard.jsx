import {Button, Card, IconButton, Typography} from "@mui/material";
import {deletePostApi, dislikePost, likePost} from "./firebase-client";
import {isEmpty} from "lodash";
import {useState} from "react";
import {css} from '@emotion/css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';



const PostCard = ( {post, getPosts, myUsername, navigate} ) => {

    let cardCSS = css`
      align-items: center;
      border: 1px solid black;
      margin: 5px;
      `



    const handleDelete = () => {
        if (post.username === myUsername) {
            deletePostApi(post.id).then(getPosts);
        }
    }

    const likedByMe = !isEmpty(post.likes) && post.likes.includes(myUsername);

    let thumbCSS = css`
    color: ${likedByMe ? "blue" : "auto"}
        `

    const handleLike = () => {

        if (likedByMe) {
            dislikePost(post, myUsername).then(getPosts);
        } else {
            likePost(post, myUsername).then(getPosts);
        }
    }

    const handleNavigate = () => {
        navigate(`/posts/${post.id}`)
    }

    return <Card className={cardCSS}>
        <Typography>{post.text}</Typography>
        { post.likes && (
        <Typography>{`Liked by: ${post.likes.join(", ")}`}</Typography>)}
        <IconButton onClick={handleLike}>{<ThumbUpIcon className={thumbCSS}/>}</IconButton>
        <Typography>{`Posted by : ${post.username}`}</Typography>
        { post.username === myUsername && (
        <Button onClick={handleDelete} variant="contained">Delete</Button>)}
        <Button onClick={handleNavigate}>See More</Button>
    </Card>
}

export default PostCard;