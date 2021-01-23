import React, { Component } from "react";
import Container from "./Container";
// import Row from "../../../Coding-Quiz/Ignore/Row";
import Column from "./Column";
// import Card from "../components/Card";
import SearchForm from "./SearchForm";
// import Wrapper from "../components/Wrapper";
// import Table from "./Table";
import API from "../utils/API";
import Navbar from "./Navbar";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    search: "",
    filterEmployees: [],
    employeeSortName: ""
  };

  // When this component mounts, search for all employees
  componentDidMount() {
    API.searchEmployees()
        .then(res => {
            console.log(res.data.results);
            this.setState(
                { employees: res.data.results, filterEmployees: res.data.results }
            )
        })
        .catch(err => console.log(err));
    };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    const search = (this.state.search);
    const filterEmployees = this.state.employees.filter(person => person.name.first.includes(search));
    this.setState({employees: filterEmployees})
  };

  sortByName = () => {
    let sortedResults = this.state.filterEmployees.sort((a,b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    }
    );
    this.setState({filterEmployees: sortedResults})
  }
    

  render() {
    return (
      <Container>
          <Navbar />
             <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <br />
              <thead>
                <tr>
                  <th>Image</th>
                  <th><button onClick={this.sortByName}>Name</button></th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB</th>
                </tr>
              </thead>
                {[...this.state.employees].map((item) => (
                  <Column
                    Image={item.picture.thumbnail}
                    Name={item.name.first + " " + item.name.last}
                    Email={item.email}
                    Phone={item.phone}
                    DOB={item.dob.date}            
            />
                ))}
      </Container>
    );
  }
}

export default EmployeeContainer;

//not rendering api call info?
//not able to make distinct rows/columns?
//search feature seems to not be working?
//clickable sort/filter feature
//finish deploying