import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <div className="titleText">What word would you like to look up?</div>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue="Search a word..."
          />
        </form>
        <div className="hint">
          Suggested words: Sunrise, ocean, nature, wine etc.
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
