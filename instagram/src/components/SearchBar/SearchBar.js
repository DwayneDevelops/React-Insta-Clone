import React from 'react'; 

import './SearchBar.css'

const SearchBar = props => {


  // handleChange = e => { 
  //   if (e.target.value !== ''){
      
  //   }

  // }

  return (
    <div className='searchBar'>
      <div>
        <i className="fab fa-instagram"></i> | Instagram
      </div>
      <input
        type="text" 
        className='serch-bar'
        placeholder='Search' 
        // onKeyDown={this.handleChange} 
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
