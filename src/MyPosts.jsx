import PostCard from "./PostCard";

const MyPosts = ( {postList, myUsername, getPosts, navigate}) => {

    const myPosts = postList.filter((p) => p.username === myUsername);

    if(myPosts.length > 0) {
        return (
            <>
                <h1>{`${myUsername}'s Posts`}</h1>
                {myPosts.map((post, i) => <PostCard key={i}
                                                    myUsername={myUsername}
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