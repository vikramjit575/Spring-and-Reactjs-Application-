import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


var Employee = React.createClass({
  getInitialState: function() {
    return {display: true };
  },
  handleDelete() {
    var self = this;
    $.ajax({
      url: self.props.employee._links.self.href,
      type: 'DELETE',
      success: function(result) {
        self.setState({display: false});
      }
     
    });
  },
  render: function() {
    if (this.state.display==false) return null;
    else return (
      <tr>
        <td>{this.props.employee.name}</td>
        <td>{this.props.employee.age}</td>
        <td>{this.props.employee.years}</td>
        <td>
          <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}); 
class EmployeeTable extends React.Component{


  render() {

    return (<div className="container"> 

 <table className="table table-striped">
<th>Name</th>
<th>Age</th>
<th>Years</th>


	   <tbody>{this.props.employeees.map((employee, i) => <Employee key={i} employee= {employee} />)}</tbody>
	 </table></div>);
  }
};

var App = React.createClass({
 
  loadEmployeesFromServer: function () {
    var self = this;
    $.ajax({
      url: "http://localhost:9898/api/employees"
    }).then(function (data) {
      self.setState({employeees: data._embedded.employees});
    });
  },
 
  getInitialState: function () {
    return {employeees: []};
  },
 
  componentDidMount: function () {
    this.loadEmployeesFromServer();
  },
 
  render() {
    return ( <EmployeeTable employeees={this.state.employeees}/> );
  }
});
 ReactDOM.render(<App />, document.getElementById('root') );
 ReactDOM.render(<App />, document.getElementById('root') );