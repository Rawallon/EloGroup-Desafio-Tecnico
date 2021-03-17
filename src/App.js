import React, { useEffect } from 'react';
import Board from './components/board/Board';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import Store from './store/index';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Alert from './components/layout/Alert';
import { BrowserRouter, Switch } from 'react-router-dom';
import CheckUserstate from './components/CheckUserstate';
import AddBoard from './components/addboard/AddBoard';
import { loadUser } from './actions/auth';

function App() {
  // Essa função executaria para checar se o usuario já logou antes
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
          <CheckUserstate
            path="/"
            Component={Login}
            checkState={false}
            redirUrl="/board"
          />
          <CheckUserstate
            path="/login"
            Component={Login}
            checkState={false}
            redirUrl="/board"
          />
          <CheckUserstate
            path="/register"
            Component={Register}
            checkState={false}
            redirUrl="/board"
          />
          <CheckUserstate
            path="/board"
            Component={Board}
            checkState={true}
            redirUrl="/login"
          />
          <CheckUserstate
            path="/add-lead"
            Component={AddBoard}
            checkState={true}
            redirUrl="/login"
          />
          {/* 
          Codigo anterior: 
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} /> 
          <Route path="/register" component={Register} />
          <PrivateRoute path="/board" component={Board} /> 
          <PrivateRoute path="/add-lead" component={AddBoard} /> 
          */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
