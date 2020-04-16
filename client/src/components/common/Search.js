import React from 'react';
import { Button } from 'reactstrap';

const Search = (props) => {
  const onSearch = () => {
    const inputValue = document.getElementById("searchTerm").value;
    if (inputValue === '') {
      return;
    }
    window.location = '/search/' + inputValue;
  }

  return (
    <div className="app-search">
        <input
        id="searchTerm"
        name="searchTerm"
        />
        <Button color="secondary" size="sm" onClick={ onSearch }>Search By Title</Button>
    </div>
  );
}

export default Search;