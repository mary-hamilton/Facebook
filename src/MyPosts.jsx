import PostCard from "./PostCard";

const MyPosts = ( {client, postList, getPosts, navigate}) => {

    const myPosts = postList.filter((p) => p.username === client.myUsername);

    if (myPosts.length > 0) {
        return (
            <>
                <h1>{`${client.myUsername}'s Posts`}</h1>
                {myPosts.map((post, i) => <PostCard key={i}
                                                    client={client}
                                                    post={post}
                                                    getPosts={getPosts}
                                                    navigate={navigate}/>)
                }
            </>
        )
    } else {
        return (
            <p>You have not made any posts, yet...</p>
        )
    }

}

export default MyPosts;