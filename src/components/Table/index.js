import React from "react";
import "./style.css";

function Table(props) {
        return (
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img alt="employee photo" src={props.picture} ></img>
                        </td>
                        <td>{props.firstName}{props.LastName}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.dob}</td>
                    </tr>
                </tbody>
            </table>
        );
}

export default Table;