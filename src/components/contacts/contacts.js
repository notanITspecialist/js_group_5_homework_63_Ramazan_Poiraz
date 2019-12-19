import Button from "reactstrap/lib/Button";
import {NavLink} from "react-router-dom";
import axios from 'axios'

import React, {Component} from 'react';

class Contacts extends Component {
    state = {
        data: null
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-64-49739.firebaseio.com/contacts.json');
        data = data.data[Object.keys(data.data)[0]];
        this.setState({data});
    }

    render() {
        return this.state.data &&  (
            <div style={{marginTop: '30px'}}>
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.text}</p>
                <br/>
                <p>Our socials networks:</p>
                <ul>
                    {Object.keys(this.state.data.links).map(link => {
                        return <li key={link+this.state.data.links[link]}><a href={this.state.data.links[link]}>{link}</a></li>
                    })}
                </ul>
                <NavLink to="/contacts/edit">
                    <Button>Edit contacts</Button>
                </NavLink>
            </div>
        );
    }
}

export default Contacts;