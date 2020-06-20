import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { appRoutes } from '../../routes';
import { store } from '../../modules';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import './index.scss';

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <div className="layout-main">
              <Router>
                <Header />
                <Sidebar />
                <div className="layout-main-container">
                  <div className="layout-main-body">
                    <Switch>
                      {
                        appRoutes.map((route, i) => (
                          <Route key={i} {...route} />
                        ))
                      }
                    </Switch>
                  </div>
                </div>
                
              </Router>
            </div>
          </Provider>          
        );
    }
}

export default App;