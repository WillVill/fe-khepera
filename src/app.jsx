import React from 'react';
import { MainHeader } from './components';
import Router from './router';

const App = () => (
    <div className="app-wrapper">
        <MainHeader />
        <Router />
    </div>
);

export default App;
