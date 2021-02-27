import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' ;
import Header from './components/common/header'
import List from './list/list'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/notFound/notFound'
import Details from './components/details/details'
import Favorites from './components/Favorites'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={List} exact/>
          <Route path='/currency/:id' component={Details} />
          <Route path='/favorites' component={Favorites} />
          <Route component={NotFound} />
          
        </Switch>
      </div>
    </BrowserRouter>
  )
}



ReactDOM.render(
    <App />,  document.getElementById('root')
);



