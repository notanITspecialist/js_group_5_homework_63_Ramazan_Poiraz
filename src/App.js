import React, {Component} from 'react';
import AddPost from "./components/addPost/addPost";
import PostList from "./components/postList/postList";

class App extends Component {
    render() {
        return (
            <div>
                <AddPost />
                <PostList />
            </div>
        );
    }
}

export default App;