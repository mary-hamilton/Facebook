import {Button, Card, IconButton, Typography} from "@mui/material";
import {isEmpty} from "lodash";
import {css} from '@emotion/css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const PostCard = ( {client, post, getPosts, navigate} ) => {

    let cardCSS = css`
      align-items: center;
      border: 1px solid black;
      margin: 5px;
      `

    const handleDelete = () => {
            client.deletePostApi(post._id).then(getPosts);
    }

    const toggleLike = () => {
        client.toggleLikePost(post).then(getPosts);
    }

    const likedByMe = !isEmpty(post.likes) && post.likes.includes(client.myUsername);

    let thumbCSS = css`
    color: ${likedByMe ? "blue" : "auto"}
        `

    const handleNavigate = () => {
        navigate(`/posts/${post._id}`)
    }

    return <Card style={{backgroundColor: `${client.randomColour()}`}} className={cardCSS}>
        <Typography>{post.text}</Typography>
        { post.likes.length > 0 && (
        <Typography>{`Liked by: ${post.likes.join(", ")}`}</Typography>)}
        <IconButton onClick={toggleLike}>{<ThumbUpIcon className={thumbCSS}/>}</IconButton>
        <Typography>{`Posted by : ${post.username}`}</Typography>
        {post.username === client.myUsername &&
        <Button onClick={handleDelete} variant="contained">Delete</Button>}
        <Button onClick={handleNavigate}>See More</Button>
    </Card>
}

export default PostCard;