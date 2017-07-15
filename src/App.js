import React, {Component} from 'react';
import Home from './Home';
import './css/App.css';
import Register from "./Register";
import ThankYou from "./ThankYou";

class App extends Component {

    constructor() {
        super();

        this.state = {
            route: 'home'
        }
    }

    register = () => this.setState({route: 'register'});
    home = () =>  this.setState({route: 'home'});
    thankYou = () =>  this.setState({route: 'thankYou'});

    render() {
        const {route} = this.state;

        return (route === 'home') ? <Home back={this.register} />
            : (route === 'register') ? <Register back={this.home} finish={this.thankYou} />
            : <ThankYou back={this.home} />;
    }
}

export default App;
