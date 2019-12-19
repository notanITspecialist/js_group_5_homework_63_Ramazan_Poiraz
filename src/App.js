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
import Contacts from "./components/contacts/contacts";
import FullInfo from "./components/fullInfo/fullInfo";
import EditPost from "./components/editPost/editPost";
import AboutEdit from "./components/aboutEdit/aboutEdit";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navigation/>
                    <Container>
                        <Switch>
                            <Route path='/' exact component={PostList}/>
                            <Route path='/add' component={AddPost}/>
                            <Route path='/about/edit' component={AboutEdit}/>
                            <Route path='/about' component={About}/>
                            <Route path='/fullInfo/:id/edit' component={EditPost}/>
                            <Route path='/fullInfo/:id' component={FullInfo}/>
                            <Route path='/contacts' component={Contacts}/>
                        </Switch>
                    </Container>
                </Router>
            </>
        );
    }
}

export default App;