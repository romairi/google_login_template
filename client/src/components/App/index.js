import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import Routes from '../../routes/index';
import Header from "../Header";


const App = () => {
    return (
        <div className="App">

            <Router>
                <Header/>
                <Routes/>
            </Router>

        </div>
    );
};

export default App;
