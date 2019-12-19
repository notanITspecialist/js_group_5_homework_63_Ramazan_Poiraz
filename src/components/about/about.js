import axios from 'axios'
import Button from "reactstrap/lib/Button";

import React, {Component} from 'react';

class About extends Component {

    state = {
        data: {}
    };

    async componentDidMount() {
        let data = await axios.get('https://lesson-64-49739.firebaseio.com/about.json');
        data = data.data[Object.keys(data.data)[0]];
        this.setState({data});
    }

    render() {
        return (
            <div style={{marginTop: '30px'}}>
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.text}</p>
                <Button>Edit</Button>
            </div>
        );
    }
}

export default About;