import React, {Component} from 'react';
import Home from './Home';
import './css/App.css';
import Register from "./Register";

class App extends Component {

    constructor() {
        super();

        this.state = {
            route: 'home'
        }
    }

    register = () => {
        console.log('register...');
        this.setState({route: 'register'});
    };
    home = () => {

        console.log('home...');
        this.setState({route: 'home'});
    };

    render() {
        const {route} = this.state;

        return (route === 'home') ? <Home back={this.register} /> : <Register back={this.home} />;
    }
}

export default App;
