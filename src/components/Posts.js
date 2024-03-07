import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Posts;
