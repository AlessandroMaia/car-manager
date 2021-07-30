import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../../components/HeaderComponent/Header';
import Cars from '../Cars/Cars'
import Brands from '../Brands/Brands';
import Welcome from '../Welcome/Welcome';

function Home() {
    return (
        <Router>
            <Header />
            <Switch >
                <Route exact path="/home/">
                    <Welcome />
                </Route>
                <Route exact path="/home/cars">
                    <Cars />
                </Route>
                <Route exact path="/home/brands">
                    <Brands />
                </Route>
            </Switch>
        </Router>
    )
}

export default Home