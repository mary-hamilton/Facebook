import PostCard from "./PostCard";

const PostList = ( { client, postList, myUsername, getPosts, navigate}) => {
    return (
        <>
        {
            postList.map((post, i) => <PostCard key={i}
                                                client={client}
                                                myUsername={myUsername}
                                                post={post}
                                                getPosts={getPosts}
                                                navigate={navigate}/>).reverse()
        }
        </>
    )
}

export default PostList;