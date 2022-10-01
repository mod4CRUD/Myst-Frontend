import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../services/pokedex';
import { useInView } from 'react-intersection-observer';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  
  const useableSearchParams = Object.fromEntries(searchParams.entries());

  const nextPage = async () => {
    useableSearchParams.page = parseInt(useableSearchParams.page) + 1;
    setSearchParams(useableSearchParams);
    const moreResults = await search(useableSearchParams);
    setSearchResults(searchResults.concat(moreResults.results));
  };

  const infinScrollRef = useInView({
    triggerOnce:true,
    onchange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;

  const searchPokedex = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);
    try { 
      const body = await search(searchObj);
      setSearchResults(body.results);
    } catch (e) {
      console.log(e);
      setError('Error' + e.toString());
    }
  };
  useEffect(() => void searchPokedex(useableSearchParams), []);

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchPokedex,
    infinScrollRef,
    error,
  };

}

