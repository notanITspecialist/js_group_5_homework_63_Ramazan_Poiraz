import React, {Component} from 'react';
import axios from 'axios'

class FullInfo extends Component {
    state = {
      data: {},
    };

    async componentDidMount() {
        const data = await axios.get('https://lesson-64-49739.firebaseio.com/blog/'+this.props.match.params.id+'.json');
        this.setState({data: data.data});
    }

    render() {
        return (
            <div>
                <p>Date: {this.state.data.date}</p>
                <p>Title: {this.state.data.title}</p>
                <p>Text: {this.state.data.text}</p>
            </div>
        );
    }
}

export default FullInfo;