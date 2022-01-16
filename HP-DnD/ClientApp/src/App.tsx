import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import Character from './pages/Character';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/character' component={Character}/>
    </Layout>
);
