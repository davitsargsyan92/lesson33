import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/common/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

const List = lazy(() => import("./components/list/list"));
const Detail = lazy(() => import("./components/detail/Detail"));
const Favorites = lazy(() => import("./components/favorites/index"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));
const App = () => {

  return (
      <BrowserRouter>
          <div>
              <Suspense fallback={ <div>Fallback</div>}>
                  <Header/>
                  <Switch>
                      <Route path="/" component={List} exact/>
                      <Route path="/currency/:currencyId" component={Detail}  exact />
                      <Route path="/favorites" component={Favorites}  exact />
                      <Route component={NotFound} />
                  </Switch>
              </Suspense>

          </div>
      </BrowserRouter>

  );
};


ReactDOM.render(<App/> , document.getElementById("root"));


