import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from "react-redux";


import * as actions from '../../redux/actions';
import Routes from '../../routes/index';
import Header from "../Header";


class App extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchUser();
    }


    render() {
        return (
            <div className="container">
                <Router>
                    <Header/>
                    <Routes/>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
