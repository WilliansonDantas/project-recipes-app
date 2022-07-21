import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Provider from './context/MyProvider';

// { /* <span className="logo">TRYBE</span>
// <object
//   className="rocksGlass"
//   type="image/svg+xml"
//   data={ rockGlass }
// >
//   Glass
// </object> */ }

function App() {
  return (
    <Provider>
      <div className="meals">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route path="/foods/:id" />
          <Route path="/drinks/:id" />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
