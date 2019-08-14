import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ generalStates }) => {
  const items = generalStates.get('data').map((user) => {
    return <li key={ user.get('email') }>{ `${ user.getIn(['name', 'first']) } ${ user.getIn(['name', 'last']) }` }</li>
  });
  
  return (
    <ul className="search-results">
      { items }
    </ul>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  data: PropTypes.object
}