import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./component/Homepage/Homepage";
import Collection from "./component/CollectionPage/Collection";
import Footer from "./component/Homepage/component4/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={Homepage} exact />
        <Route path="/collection" component={Collection} />
        <Route path="/collection/product/:id" component = {Homepage} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
