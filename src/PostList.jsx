import PostCard from "./PostCard";

const PostList = ( {postList, myUsername, getPosts, navigate}) => {
    return (
        <>
        {
            postList.map((post, i) => <PostCard key={i}
                                                myUsername={myUsername}
                                                post={post}
                                                getPosts={getPosts}
                                                navigate={navigate}/>)
        }
        </>
    )
}

export default PostList;