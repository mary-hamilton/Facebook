import PostCard from "./PostCard";
import {useParams} from "react-router-dom";

const PostDetail = ( { postList, myUsername, getPosts, } ) => {
    const { postid } = useParams();
    const selectedPost = postList.find((p) => p._id === postid);
    return (
        <>
            <PostCard myUsername={myUsername} post={selectedPost} getPosts={getPosts}/>
        </>
    )
}

export default PostDetail;