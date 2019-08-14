import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = (props) => {
  const handleChangeValue = (evt) => {
    props.changeSearchValue(evt.target.value);
  }

  return (
    <input 
      type="search" 
      value={ props.generalStates.get('searchValue') } 
      onChange={ handleChangeValue }/>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string
}