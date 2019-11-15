import './App.css';
import React, { Component } from 'react';
import NavBar from "./Components/js/NavBar/NavBar";
import { Route, Switch, Redirect} from "react-router-dom";
import Login from "./Components/js/Login/Login";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";
import RegisterPage from "./Components/js/RegisterPage/RegisterPage";
import CheckoutPage from "./Components/js/UserCart/CheckoutPage";
import ProfilePage from "./Components/js/ProfilePage/ProfilePage";
import UserDetails from "./Components/js/RegisterPage/RegisterPage";
import {connect} from "react-redux";
import AboutPage from './Components/js/AboutPage/About';

class App extends Component {
 
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/COMP354" component={HomePage} />
          <Route path="/COMP354/cart" />
          <Route path="/COMP354/profile" component={ProfilePage}/>
          <Route 
            path='/COMP354/dashboard' 
            render={()=> this.props.currentUser ? <AccountDashboard/> : (<Redirect to='/'/>)}
          />
          <Route exact path="/COMP354/about"component={AboutPage}/>
          <Route path="/COMP354/product/:id" component={ItemDetailsPage}/>
          <Route 
            path='/COMP354/RegisterPage' 
            render={()=> this.props.currentUser ? (<Redirect to='/COMP354'/>) : <RegisterPage/> }
          />
          <Route path='/COMP354/Login' 
            render={()=> this.props.currentUser ? (<Redirect to='/COMP354'/>) : <Login/> }
          />
          <Route path='/COMP354/checkout' component={CheckoutPage}/>
          <Route path='/COMP354/login' component={UserDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
export default connect(mapStateToProps)(App);

