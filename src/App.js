import React, {Component} from 'react';
import Home from './Home';
import './css/App.css';
import Register from "./Register";

class App extends Component {

    constructor() {
        super();

        this.state = {
            route: 'register'
        }
    }


    register = () => {

    };

    render() {
        const {route} = this.state;

        return (route === 'home') ? <Home /> : <Register />;
    }
}

export default App;
