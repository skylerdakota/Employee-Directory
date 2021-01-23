import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
// import Card from "../components/Card";
import SearchForm from "./SearchForm";
// import Wrapper from "../components/Wrapper";
import Table from "./Table";
import API from "../utils/API";
import Navbar from "./Navbar";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    search: "",
    filterEmployees: []
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
    const filterEmployees = this.state.employees.filter
    this.setState({employees: filterEmployees})
  };

  render() {
    return (
      <Container>
          <Navbar />
          {/* <Container />
          <Wrapper> */}
             <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <br />
              <Table>
                <Column>
                <Row>

                </Row>
                </Column>
                  {/* Image={this.state.results.picture.thumbnail}
                  Name={this.state.results.name.first + this.state.results.name.last}
                  Phone={this.state.results.phone}
                  Email={this.state.results.email}
                  DOB={this.state.results.dob} */}
              </Table>
        {/* </Wrapper> */}
      </Container>
    );
  }
}

export default EmployeeContainer;

//not rendering api call info?
//not able to make distinct rows/columns?
//clickable sort/filter feature
