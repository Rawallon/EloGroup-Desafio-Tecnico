import React, { useEffect } from 'react';

import Board from './components/board/Board';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import Store from './store/index';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Alert from './components/layout/Alert';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { loadUser } from './actions/auth';
import AddBoard from './components/addboard/AddBoard';

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={Store}>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/board" component={Board} />
          <PrivateRoute path="/add-lead" component={AddBoard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
