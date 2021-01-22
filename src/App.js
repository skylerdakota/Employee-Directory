import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import employees from "./pages/employees";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={employees} />
          <Route exact path="/employees" component={employees} />
        </Wrapper>
      </div>
    </Router>
  );
}


export default App;