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
                <h2>Информация о нас</h2>
                <p>Какая нибудь информация о нас</p>
                <Button>Edit</Button>
            </div>
        );
    }
}

export default About;