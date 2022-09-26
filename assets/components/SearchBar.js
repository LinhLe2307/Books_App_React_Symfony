import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [inputField, setInputField] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  // Input from users
  const handleChange = e => {
    //in case someone has put spaces in the input and format it to look nicer in the URL using +
    const inputFormat = e.target.value.trim().replaceAll(' ', '+');
    setInputField(inputFormat);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Send the inputField as :keyword to SearchPage to display it in URL and useParams().keyword to fetch query*/}
      <input
        type='text'
        onChange={handleChange}
        defaultValue={inputField}
        placeholder='Search...'
      />
      <button type='submit' className='btn btn-primary'>
        <Link to={`/search/${inputField}`} className='text-light'>
          Submit
        </Link>
      </button>
    </form>
  );
};

export default SearchBar;
