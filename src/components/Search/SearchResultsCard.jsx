
import styles from './Search.css';


export default function SearchResultCard({ pokemon, infinScrollRef }) {

  return <li className = {styles.SearchResultCard} ref = {infinScrollRef}>
    {pokemon.pokemon}
    <img src={pokemon.url_image}/>
  </li>;
}
