import React, { Fragment } from 'react';
import User from '../user';

const Test = (props) => {
	const { generalStates, getUsers } = props;

	if(generalStates.get('isLoading'))
		return <p>Loading...</p>;

	return (
		<Fragment>
			<button onClick={ getUsers }>Get a Random User</button>
			<User { ...props } />
		</Fragment>	
	);
};

export default Test;