import { Form } from "react-router-dom";
import styles from "../component_css/SearchForm.module.css";

function SearchForm({ searchTerm }) {
  return (
    <Form className={styles.formContainer}>
      <input
        type="text"
        name="search"
        className={styles.searchBar}
        defaultValue={searchTerm}
      />
      <button className={styles.btn}>Search</button>
    </Form>
  );
}

export default SearchForm;
