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
    changeText = editorState => {
        this.setState({text: editorState.blocks[0].text});
    };

    addPost = async e => {
        e.preventDefault();
        const date = new Date();
        const objDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear() + ' ' + date.getHours() +':'+ date.getMinutes();
        const info = {...this.state, date: objDate};
        await axios.post('https://lesson-64-49739.firebaseio.com/blog.json', info);
        this.props.history.replace('/');
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
                        onChange={this.changeText}
                        editorClassName='editor'
                    />
                    {this.state.text.length > 0 && this.state.title.length > 0 ? <Button className='my-4'>Add</Button> : <Button className='my-4' disabled>Add</Button>}
                </Form>
            </div>
        );
    }
}

export default AddPost;