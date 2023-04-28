import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {postPostApi} from "./firebase-client";

const PostInput = ( { getPosts, myUsername } ) => {
    let [newPost, updateNewPost] = useState(
        {
            text: "",
            username: myUsername,
            _id: "",
            likes: ""
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