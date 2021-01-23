import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import employees from "./pages/employees";
// import Navbar from "./components/Navbar";
// import SearchForm from "./components/SearchForm";
// import Table from "./components/Table";
// import EmployeeDetail from "../../Coding-Quiz/Ignore/EmployeeDetail";
import EmployeeContainer from "./components/EmployeeContainer";
// import Wrapper from "./components/Wrapper";
import './App.css'

function App() {
  return  <EmployeeContainer />;
}

export default App;


{/* <Router>
<div>
  <Navbar />
  <Wrapper>
    <Route exact path="/" component={employees} />
    <Route exact path="/employees" component={employees} />
  </Wrapper>
</div>
</Router> */}