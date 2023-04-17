import {Button, Card, Typography} from "@mui/material";
import {deletePostApi, likePost} from "./firebase-client";

const PostCard = ( {post, getPosts} ) => {

    const handleDelete = () => {
        deletePostApi(post.id).then(getPosts);
    }

    const handleLike = () => {
        likePost(post, "RosaT").then(getPosts);
    }

    return <Card className="CardCSS">
        <Typography>{post.text}</Typography>
        { post.likes && (
        <Typography>{`Liked by: ${post.likes.join(", ")}`}</Typography>)}
        <Button onClick={handleLike} variant="contained">Like</Button>
        <Typography>{`Posted by : ${post.username}`}</Typography>
        <Button onClick={handleDelete} variant="contained">Delete</Button>
    </Card>
}

export default PostCard;