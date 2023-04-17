import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {getPostsApi, postPostApi} from "./firebase-client";

const PostInput = ( { getPosts } ) => {
    let [newPost, updateNewPost] = useState(
        {
            text: "",
            likes: [],
            id: "",
            username: "RosaT"
        }
    )

    let handleChange = (e) => {
        updateNewPost(
            {
                ...newPost,
                text: e.target.value
            }
        )
    }

    let handleSubmit = () => {
        postPostApi(newPost, "RosaT");
        getPosts();
    }


    return (
        <>
        <TextField
            value={newPost.text}
            onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        </>
    )
}

export default PostInput;