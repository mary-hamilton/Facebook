import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {postPostApi} from "./firebase-client";
import PostCard from "./PostCard";

const PostInput = ( { postList, getPosts, myUsername } ) => {
    let [newPost, updateNewPost] = useState(
        {
            text: "",
            likes: [],
            id: "",
            username: myUsername
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
        postPostApi(newPost, myUsername).then(getPosts);
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