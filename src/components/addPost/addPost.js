import React, {Component} from 'react';
import axios from 'axios'
import { Button, Form, Input} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './addPost.css';

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
        this.setState({title: '', text: ''})
    };

    render() {
        return (
            <div>
                <h1 className='my-4'>Add new post</h1>
                <Form onSubmit={this.addPost}>
                    <label htmlFor="title" className='mb-4'>
                        <p className='m-0'>Title</p>
                        <Input onChange={this.changeTitle} value={this.state.title} id='title' />
                    </label>
                    <p className='m-0'>Description</p>
                    <Editor
                        EditorState={this.changeText}
                        editorClassName='editor'
                    />
                    <Button className='my-40'>Add</Button>
                </Form>
            </div>
        );
    }
}

export default AddPost;