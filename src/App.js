import React from 'react';
import Startpage from './component/component1/Startpage';
import Features from './component/component2/Features';
import { Citylist } from './component/component3/CityList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Startpage/>
            <Features/>
            <Citylist />
        </div>
    );
}

export default App;
