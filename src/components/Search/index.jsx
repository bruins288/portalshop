import React from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../../App.js";
import styles from "./Search.module.scss";

function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const searchInputRef = React.useRef();

  const clearSearch = () => {
    setInputValue("");
    setSearchValue("");
    searchInputRef.current.focus();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );

  const changeSearch = (str) => {
    setInputValue(str);
    updateSearchValue(str);
  };

  return (
    <div className={styles.container}>
      <svg
        className="feather feather-search"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
      <input
        ref={searchInputRef}
        className={styles.search}
        type="text"
        placeholder="Поиск пиццы...."
        onChange={(e) => changeSearch(e.target.value)}
        value={inputValue}
      />
      {inputValue && (
        <svg
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          onClick={clearSearch}
        >
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      )}
    </div>
  );
}

export default Search;
