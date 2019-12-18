import React, {Component} from 'react';
import {Button, Form, Input} from "reactstrap";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from "axios";

class EditPost extends Component {
    state = {
        data: {},
        title: '',
        text: '',
    };

    async componentDidMount() {
        const data = await axios.get('https://lesson-64-49739.firebaseio.com/blog/'+this.props.match.params.id+'.json');
        this.setState({data: data.data, title: data.data.title, text: data.data.text});
    }

    changeTitle = e => {
        this.setState({title: e.target.value})
    };
    changeText = e => {
        this.setState({text: e.target.value});
    };

    editPost = async e => {
        e.preventDefault();
        const newData = {...this.state.data, title: this.state.title , text:this.state.text};
        await axios.put('https://lesson-64-49739.firebaseio.com/blog/'+this.props.match.params.id+'.json', newData);
        this.props.history.replace('/fullInfo/'+this.props.match.params.id);
    };

    render() {
        return (
            <div>
                <h1 className='my-4'>Edit post</h1>
                <Form onSubmit={this.editPost}>
                    <label htmlFor="title" className='mb-4'>
                        <p className='m-0'>Title</p>
                        <Input onChange={this.changeTitle} value={this.state.title} id='title' />
                    </label>
                    <p className='m-0'>Description</p>
                    <Input type="textarea" onChange={this.changeText} value={this.state.text}/>
                    {this.state.text.length > 0 && this.state.title.length > 0 ? <Button className='my-4'>Add</Button> : <Button className='my-4' disabled>Add</Button>}
                </Form>
            </div>
        );
    }
}

export default EditPost;