import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/shop" component={ShopPage}></Route>
            <Route exaxt path="/signin" component={SignInSignUpPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
