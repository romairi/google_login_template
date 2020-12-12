import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from "react-redux";


import * as actions from '../../redux/actions';
import Routes from '../../routes/index';
import Header from "../Header";
import './index.scss';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }


    render() {
        return (
            <div className="app-container">
                <Router>
                    <Header/>
                    <Routes/>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
