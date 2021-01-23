import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
        <br />
        <button 
          onClick={props.handleFormSubmit}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
