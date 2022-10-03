// import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
import { FormButton } from '../Forms/FormController.jsx';
import { search } from '../../services/pokeDex.js';

export default function Search() {
  const {
    infinScrollRef,
    nextPage,
    searchResults,
  } = useSearchResults();


  return <section>
    <SearchForm 
      onSubmit={search} />
    <SearchResults results={searchResults} 
      infinScrollRef={infinScrollRef}/> 
    <FormButton onClick={nextPage}>next</FormButton> 
  </section>;

}
