import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import BasicForm from './BasicForm';

class App extends Component {
	handleSubmit(payload) {
		console.log('Submit: ' + JSON.stringify(payload));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<BasicForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

export default App;
