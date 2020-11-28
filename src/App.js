import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import PageWrapper from './components/PageWrapper'


/* Pages */
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Exchange from './components/pages/Exchange'
import Catalog from './components/pages/Catalog'


class App extends React.Component {
  render() {
  return (
    <div className="app-div">
      <Router>
        <PageWrapper>
       
            <Route 
              exact={true}
              path="/"
              component={Home}
            />
            <Route 
              path="/contact"
              component={Contact}
            />

            <Route 
              path="/exchange"
              component={Exchange}
            />

            <Route 
              path="/catalog"
              component={Catalog}
            />
          
          </PageWrapper>
         </Router>
    </div>
  )}
}

export default App;
