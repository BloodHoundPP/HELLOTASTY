import React from 'react';
import Startpage from './component/component1/Startpage';
import Features from './component/component2/Features';
import Footer from './component/component4/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Startpage/>
            <Features/>
            <Footer />
        </div>
    );
}

export default App;
