import React, { useEffect, useState } from "react";
import Formservices from "../services/Formservices";
import { Link } from "react-router-dom";

const Employees = () => {
  useEffect(() => {
    init();
  }, []);

  const [employees, setEmployees] = useState([]);

  const init = () => {
    Formservices.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }


  const handleDelete = (id) => {
    console.log('Printing id', id);
    Formservices.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>   
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
            <th>EId</th>
              <th>Name</th>
              <th>mail</th>
              <th>phone</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
          {
            employees.map(employee => (
              <tr key={employee.eId}>
                <td>{employee.eId}</td>
                <td>{employee.name}</td>
                <td>{employee.mail}</td>
                <td>{employee.phone}</td> 
                <td>{employee.address}</td> 
                <td>
                  <Link className="btn btn-info" to={`/employee/${employee.eId}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(employee.eId) }}>Delete</button>
                </td>               
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Employees;