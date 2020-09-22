import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			createUserProfileDocument(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
