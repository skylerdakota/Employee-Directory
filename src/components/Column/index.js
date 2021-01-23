import React from "react";
import "./style.css";

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

function Col(props) {
  // const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div>  
      <tbody>
        <tr>
          <td>
            <img alt="employee photo" src={props.Image} ></img>
          </td>
          <td colSpan="2">{props.Name}</td>
          <td colSpan="2">{props.Phone}</td>
          <td colSpan="3">{props.Email}</td>
          <td colSpan="2">{props.DOB}</td>
        </tr>
      </tbody>
    </div>
  );
}

export default Col;
