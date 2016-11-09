'use strict';

import React from 'react';

export default class EmployeePreview extends React.Component {
  constructor(props){
    super(props);
    this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
  }
  handleEmployeeChange() {
    alert("Hello");
    let value = this.props;
    console.log(value);
    this.props.handleEmployeeUpdate(value);
  }
  render() {
    return (
    	<a className="employeeLink" onClick={this.handleEmployeeChange} onkeypress={this.handleEmployeeChange}>
	        <div className="employee-preview">
	          <img src={`img/${this.props.image}`}/>
	          <h2 className="name">{this.props.name}</h2>
	        </div>
        </a>
    );
  }
}
