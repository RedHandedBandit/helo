import React, {Component} from 'react';

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
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
                <button> Login </button>
                <button> Register </button>
            </div>
        )
    }
}