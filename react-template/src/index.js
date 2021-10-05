import React from 'react';
import ReactDOM from 'react-dom';

// Import stylesheets
import './index.css';

// Import custom components
import App from './App';
import Dashboard from './Dashboard';
import { Route, BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
	return (
		<BrowserRouter>
			<Route path='/' exact component={App} />
			<Route path='/dashboard' exact component={Dashboard} />
		</BrowserRouter>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Routing />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
