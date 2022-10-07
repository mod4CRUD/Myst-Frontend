import React from 'react';
import styles from '../Page/Profile.css';
import SearchForm from '../Search/SearchForm.jsx';
import { FormButton  } from '../Forms/FormController.jsx';
import SearchResultCard from '../Search/SearchResultsCard';
import useSearchForm from '../../state/GameContext';





export default function Profile() {
  const { gameLists } = useSearchForm();
  return <section>
    <SearchForm
      type="text"
      searchText="text"
      
    />
    {/* <ul className={styles.Profile}>
      {gameLists.map(result => {
        return <li key={result._id} className={styles.searchResult}>
          <SearchResultCard games={result} />
        </li>;
      })}
    </ul> */}
    {/* { gameLists.length > 0
      ? <FormButton onClick={more}>moar</FormButton>
      : ''
    } */}
  </section>;

}
