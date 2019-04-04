import React from 'react'; 

import './SearchBar.css'

const SearchBar = props => {
  return (
    <div className='searchBar'>
      <div>
        <i className="fab fa-instagram"></i> | Instagram
      </div>
      <input
        type="text" 
        placeholder='Search' 
        onKeyDown={props.search} 
      />
      <div className="headerIcons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;
