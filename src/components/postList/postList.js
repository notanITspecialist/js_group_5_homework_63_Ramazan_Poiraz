import React, {Component} from 'react';
import axios from 'axios'
import PostListElem from "./postListElem/postListElem";

class PostList extends Component {
    state = {
      posts: []
    };

    async componentDidMount() {
        const posts = await axios.get('https://lesson-64-49739.firebaseio.com/blog.json');
        const postsList = posts.data;
        const data = Object.keys(postsList).map(elem=>({...postsList[elem],id: elem }));
        this.setState({posts: data})
    }
    render() {
        const state = this.state.posts;
        const list = state.map(elem => (
            <PostListElem key={elem.id} date={elem.date} title={elem.title} id={elem.id}/>
        ));
        return (
            <ul style={{padding: '0', listStyle: 'none'}}>
                {list.reverse()}
            </ul>
        );
    }
}

export default PostList;