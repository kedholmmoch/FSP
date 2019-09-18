import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  withRouter
} from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path}
    exact={exact}
    render={props => 
      !loggedIn ? <Component {...props}/> : <Redirect to="/"/>
    }
  />
);

const Protected = ({ component: Component, path, currentUser, exact }) => {


  return (
  <Route
    path={path}
    exact={exact}
    render={props => 
      currentUser ? //  (
        //  (currentUser.id === paramsUserId) ? (
          <Component {...props}/> 
            //  ) : (
          //  <Redirect to="/" />
        //  )) 
      : <Redirect to="/"/>}
  />
)}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser,
    // paramsUserId: ownProps.match.params.userId,
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));