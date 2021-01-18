
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Comics from './Comics';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [comicListDefault, setComicListDefault] = useState();
  const [comicList, setComicList] = useState();
  const startApi = 'https://comicvine.gamespot.com/api/issues/?api_key=1b60e423958e9ef38615dcc2c710d08b0b66f6ce&filter=name:';
  const endApi = '&format=JSON';

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setComicList(data) 
         setComicListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = comicListDefault.filter(comic=> {
      return comic.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setComicList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Comic List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <Comics comicList={comicList}/>
    </>
   );
}

export default SearchPage