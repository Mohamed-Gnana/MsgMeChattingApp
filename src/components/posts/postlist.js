import React from 'react'
import { Link } from 'react-router-dom';
import PostSummary from "./postsummary";

class PostList extends React.Component {
    render() {
        const {posts} = this.props ;
        const postlist = posts ? (posts.map(post => {
            return (
                <div key = {post.id}>
                    <Link to = {"/" + post.id} key = {post.id}>
                         <PostSummary post = {post} />
                    </Link>
                 </div>
            )
        })) : (<p className = "grey-text text-darken-3">There is no posts.</p>);
        return (
            <div>
                {postlist}
            </div>
        )
    }
}

export default (PostList) ;
