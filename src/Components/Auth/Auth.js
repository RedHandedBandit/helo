import React, {Component} from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    registerUser = () => {
        const { username, password } = this.state;
        const newUser = {
            username,
            password
        }
        console.log('newuser', newUser)

        axios.post('/register', newUser).then( res => {
            this.props.history.push('/dashboard')
        }).catch(error => console.log('didnt work retard',error))
    }

    loginUser = () => {
        const { username, password } = this.state
        const existingUser = {
            username,
            password
        }

        axios.post('/login', existingUser).then( res => {
            console.log(res)
            this.props.history.push('/dashboard')
        }).catch(error => console.log(error))
    }

    handleLoginSubmit = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    render(){
        return (
            <div>
                Auth
                <input 
                    placeholder="username" 
                    onChange={(e) => this.handleLoginSubmit('username', e.target.value)}
                    value={this.state.username}
                    type="text"
                    />
                <input 
                    placeholder="password" 
                    onChange={(e) => this.handleLoginSubmit('password', e.target.value)}
                    value={this.state.password}
                    type="password"
                    />
                <button onClick={() => this.loginUser()} > Login </button>
                <button onClick={() => this.registerUser()} > Register </button>
            </div>
        )
    }
}