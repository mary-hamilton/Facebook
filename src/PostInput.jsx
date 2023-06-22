import {useState} from "react";
import {Button, TextField} from "@mui/material";

const PostInput = ( { client, getPosts, navigate } ) => {
    let [newPost, updateNewPost] = useState(
        {
            text: "",
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
        client.postPostApi(newPost).then(getPosts);
        navigate("/");
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