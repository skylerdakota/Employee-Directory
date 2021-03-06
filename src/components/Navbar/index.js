import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className= "text-center">
        <h2>Employee Directory</h2>
        <p>Click on name to sort alphabetically or use the search box to narrow your results</p>
      </div>
   </nav>
  );
}

export default Navbar;
