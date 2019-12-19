import React, {Component} from 'react';
import axios from 'axios'
import Button from "reactstrap/es/Button";

class FullInfo extends Component {
    state = {
      data: {},
    };

    async componentDidMount() {
        const data = await axios.get('https://lesson-64-49739.firebaseio.com/blog/'+this.props.match.params.id+'.json');
        this.setState({data: data.data});
    }

    deletePost = async () => {
        await axios.delete('https://lesson-64-49739.firebaseio.com/blog/'+this.props.match.params.id+'.json');
        this.props.history.replace('/');
    };

    render() {
        return (
            <div className='border mt-4 p-3' style={{borderRadius: '.255rem', height: 'calc(100vh - 100px)'}}>
                <div className='d-flex'>
                    <h1>{this.state.data.title}</h1>
                    <p className='ml-auto'>{this.state.data.date}</p>
                </div>
                <div className='border my-2 p-3 overflow-auto' style={{borderRadius: '.255rem', height: '85%'}}>
                    <p>{this.state.data.text}</p>
                </div>
                <Button color='success mr-2'>Edit</Button>
                <Button onClick={this.deletePost} color='danger'>Delete</Button>
            </div>
        );
    }
}

export default FullInfo;