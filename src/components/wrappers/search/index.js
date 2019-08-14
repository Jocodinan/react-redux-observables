import React, { Fragment } from 'react';
import SearchBar from './search-bar';
import SearchResults from './search-results';

const Search = (props) => {
	return (
		<Fragment>
			<SearchBar { ...props } />
      <SearchResults { ...props } />
		</Fragment>	
	);
}

export default Search;