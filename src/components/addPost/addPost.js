import React, {Component} from 'react';
import axios from 'axios'
import { Button, Form, Input} from 'reactstrap';

class AddPost extends Component {
    state = {
      title: '',
      text: '',
    };

    changeTitle = e => {
      this.setState({title: e.target.value})
    };
    changeText = e => {
        this.setState({text: e.target.value})
    };

    addPost = async e => {
        e.preventDefault();
        const date = new Date();
        const objDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear() + ' ' + date.getHours() +':'+ date.getMinutes();
        const info = {...this.state, date: objDate};
        await axios.post('https://lesson-64-49739.firebaseio.com/blog.json', info);
    };

    render() {
        return (
            <div style={{width: '20%'}}>
                <Form onSubmit={this.addPost}>
                    <Input onChange={this.changeTitle} value={this.state.title} placeholder="Title" />
                    <Input onChange={this.changeText} value={this.state.text} placeholder="Text" />
                    <Button>SAVE</Button>
                </Form>
            </div>
        );
    }
}

export default AddPost;