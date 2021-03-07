import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/common/Header";
import List from './components/list/list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Detail from "./components/detail/Detail";
import './index.css';

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route path="/" component={List}  exact />
                  <Route path="/currency/:currencyId" component={Detail}  exact />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </BrowserRouter>

  );
};


ReactDOM.render(<App/> , document.getElementById("root"));


