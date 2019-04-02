import React from 'react'; 

function SearchBar() {
  return (
    <div className='searchBar'>
      <div>
        <i className="fab fa-instagram"></i> | Instagram
      </div>
  <input value='' placeholder='Search' />
      <div className="headerIcons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;
