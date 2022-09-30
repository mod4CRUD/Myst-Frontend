import styles from './Dashboard.css';

export default function Dashboard() {
  return( 
    <div className={styles.Dashboard}>
      
      <form>
        <label>
          name
          <input name="name" placeholder="your name"/>
        </label>

        <label>
          date
          <input type="date" name="date" placeholder="pick a date"/>
        </label>

        <label>
          Options
          <select required>
            <option defaultValue="">
              select a option
            </option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option> 
          </select>
        </label>

        <label>bio
          <textarea name="bio" placeholder="tell us about yourself"/>
        </label>

        <fieldset>
          <legend>do you accept</legend>
          <label className={styles.OptionLabel}>
            <input type="checkbox"/>
            Yes
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    

    </div>
  );
}
