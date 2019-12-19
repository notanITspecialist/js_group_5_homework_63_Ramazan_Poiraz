import React, {Component} from 'react';
import axios from 'axios'
import PostListElem from "./postListElem/postListElem";

class PostList extends Component {
    state = {
      posts: []
    };

    async componentDidMount() {
        const posts = await axios.get('https://lesson-64-49739.firebaseio.com/blog.json');
        if(posts.data !== null){
            const postsList = posts.data;
            const data = Object.keys(postsList).map(elem=>({...postsList[elem],id: elem }));
            this.setState({posts: data})
        }
    }
    render() {
        const state = this.state.posts;
        const list = state.map(elem => (
            <PostListElem key={elem.id} date={elem.date} title={elem.title} id={elem.id}/>
        ));
        return (
            <div className="p-0">
                {list.length > 0 ? list.reverse() : <h1 className="text-center mt-3">List of posts is empty</h1> }
            </div>
        );
    }
}

export default PostList;