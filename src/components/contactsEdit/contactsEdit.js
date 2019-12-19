import React, {Component} from 'react';
import axios from 'axios'
import {Form, Input} from "reactstrap";
import Button from "reactstrap/lib/Button";
import nanoid from "nanoid";

class ContactsEdit extends Component {
    state = {
        data: null,
        title: '',
        text: '',
        linkName: '',
        link: '',
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-64-49739.firebaseio.com/contacts.json');
        data = {...data.data[Object.keys(data.data)[0]], id: Object.keys(data.data)[0]};
        this.setState({data, title: data.title, text: data.text});
    }

    editAbout = async e => {
        e.preventDefault();
        const data = {...this.state.data, title: this.state.title, text: this.state.text};
        await axios.put('https://lesson-64-49739.firebaseio.com/contacts/'+data.id+'.json',data);
        this.props.history.replace('/contacts');
    };

    addLink = async e => {
        e.preventDefault();
        const data = {...this.state.data};
        data.links = {...data.links, [this.state.linkName]: {id: nanoid(), link: this.state.link}};
        this.setState({data: data, link: '', linkName: ''});
    };

    deleteLink = async (name) => {
        const data = {...this.state.data};
        delete data.links[name];
        this.props.history.replace('/contacts/edit');
    };

    changeTitle = e => {
        this.setState({title: e.target.value})
    };
    changeText = e => {
        this.setState({text: e.target.value});
    };

    changeLink = e => {
        this.setState({link: e.target.value});
    };

    changeLinkName = e => {
        this.setState({linkName: e.target.value});
    };

    render() {
        return this.state.data && (
            <div>
                <h1 className='my-4'>Contacts edit</h1>
                <Form onSubmit={this.editAbout}>
                    <label htmlFor="title" className='mb-4'>
                        <p className='m-0'>Title</p>
                        <Input onChange={this.changeTitle} value={this.state.title} id='title' />
                    </label>
                    <p className='m-0'>Description</p>
                    <Input type="textarea" onChange={this.changeText} value={this.state.text} style={{height: '400px'}}/>
                    <p>Links</p>
                    <ul>
                        {Object.keys(this.state.data.links).map(link => {
                            return (
                                <li key={this.state.data.links[link].id}>
                                    <a href={this.state.data.links[link].link}>
                                        {link}
                                    </a>
                                    <Button onClick={() => this.deleteLink(link)} color='light' className='mx-2'>
                                        X
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='border w-50 p-2' style={{borderRadius: '.255rem'}}>
                        <Input onChange={this.changeLinkName} placeholder='Enter link name' id='title' value={this.state.linkName} />
                        <Input onChange={this.changeLink} placeholder='Enter link' id='title' className='my-2' value={this.state.link} />
                        <Button onClick={this.addLink}>Add new link</Button>
                    </div>
                    {this.state.text.length > 0 && this.state.title.length > 0 ? <Button className='my-4'>Add</Button> : <Button className='my-4' disabled>Add</Button>}
                </Form>
            </div>
        );
    }
}

export default ContactsEdit;