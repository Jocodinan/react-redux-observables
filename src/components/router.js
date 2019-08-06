import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Test from './wrappers/test';
import TestPage from './wrappers/test-page';

const Router = (props) => {
	return (
		<BrowserRouter>
			<Route key="index" exact path='/' render={(routerProps) => { return <Test {...props} {...routerProps} /> }} />
			<Route key="test-page" exact path='/test-page' render={(routerProps) => { return <TestPage {...props} {...routerProps} /> }} />
		</BrowserRouter>
	);
};

export default Router;