import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import PostList from "./components/postList/postList";
import AddPost from "./components/addPost/addPost";
import About from "./components/about/about";

class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={PostList}/>
                        <Route path='/add' component={AddPost}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;