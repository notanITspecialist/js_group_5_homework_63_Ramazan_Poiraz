import React, {Component} from 'react';
import axios from 'axios'
import Container from "reactstrap/es/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";

class App extends Component {
  add =() => {
    const date = new Date();
    const objDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();
    const info = {title: 'Title', text: 'Text', date:objDate};
    axios.post('https://lesson-64-49739.firebaseio.com/blog.json', info)
  };
    render() {
        return (
            <Container>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' render={() => <h1>home</h1>}/>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;