import React, {Component} from 'react';
import axios from 'axios'
import {Form, Input} from "reactstrap";
import Button from "reactstrap/lib/Button";

class ContactsEdit extends Component {
    state = {
        data: {},
        title: '',
        text: '',
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-64-49739.firebaseio.com/contacts.json');
        data = {...data.data[Object.keys(data.data)[0]], id: Object.keys(data.data)[0]};
        this.setState({data, title: data.title, text: data.text});
    }

    editAbout = async e => {
        e.preventDefault();
        const data = {...this.state.data, title: this.state.title, text: this.state.text};
        await axios.put('https://lesson-64-49739.firebaseio.com/contacts/'+data.id+'.json',data)
        this.props.history.replace('/contacts');
    };

    changeTitle = e => {
        this.setState({title: e.target.value})
    };
    changeText = e => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div>
                <h1 className='my-4'>Contacts edit</h1>
                <Form onSubmit={this.editAbout}>
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

export default ContactsEdit;