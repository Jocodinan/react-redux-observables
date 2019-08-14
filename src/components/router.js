import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Test from './wrappers/test';
import TestPage from './wrappers/test-page';
import Search from './wrappers/search';

const Router = (props) => {
	return (
		<BrowserRouter>
			<Route key="index" exact path='/' render={(routerProps) => { return <Test {...props} {...routerProps} /> }} />
			<Route key="test-page" exact path='/test-page' render={(routerProps) => { return <TestPage {...props} {...routerProps} /> }} />
			<Route key="search" exact path='/search' render={(routerProps) => { return <Search {...props} {...routerProps} /> }} />
		</BrowserRouter>
	);
};

export default Router;