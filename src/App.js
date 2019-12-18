import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
  add =() => {
    const date = new Date();
    const objDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();
    const info = {title: 'Title', text: 'Text', date:objDate};
    axios.post('https://lesson-64-49739.firebaseio.com/blog.json', info)
  };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;