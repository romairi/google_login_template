import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from '../../routes/index';
import Header from "../Header";


const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </div>
    );
};

export default App;
