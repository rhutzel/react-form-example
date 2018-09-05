import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = (window.devToolsExtension
	? window.devToolsExtension()(createStore)
	: createStore)(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
