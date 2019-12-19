import Button from "reactstrap/lib/Button";
import {NavLink} from "react-router-dom";
import axios from 'axios'

import React, {Component} from 'react';

class Contacts extends Component {
    state = {
        data: {}
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-64-49739.firebaseio.com/contacts.json');
        data = data.data[Object.keys(data.data)[0]];
        this.setState({data});
    }

    render() {
        return (
            <div style={{marginTop: '30px'}}>
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.text}</p>
                <NavLink to="/contacts/edit">
                    <Button>Edit contacts</Button>
                </NavLink>
            </div>
        );
    }
}

export default Contacts;