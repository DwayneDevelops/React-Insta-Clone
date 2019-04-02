import React from 'react';

function SearchBar() {
  return (
    <div className='searchBar'>
      <div>
        <i class="fab fa-instagram"></i> | Instagram
      </div>
  <input value='' placeholder='' />
      <div className="headerIcons">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;
