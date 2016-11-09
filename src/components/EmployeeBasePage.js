'use strict';

import React from 'react';
import Header from './Header';
import EmployeePreview from './EmployeePreview';
import EmployeePage from './EmployeePage';
import Announcement from './Announcement';
import employees from '../data/employees';

export default class EmployeeBasePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeId:'alok',
      employeeName:'Alok Mittal',
      employeeImage:'Alok_Dp.jpg',
      employeeBackground:'Alok_Timeline.jpg',
      employeeDOJ:'17th December 2014',
      employeeCountry:'India'
    };
    this.handleEmployeeUpdate = this.handleEmployeeUpdate.bind(this);
  }
  handleEmployeeUpdate(value) {
    this.setState({employeeId: value.id});
    this.setState({employeeName: value.name});
    this.setState({employeeImage: value.image});
    this.setState({employeeBackground: value.cover});
    this.setState({employeeDOJ: value.DOJ});
    this.setState({employeeCountry: value.country});
  }
  render() {
    let employeeId = this.state.employeeId;
    let employeeName = this.state.employeeName
    let employeeImage = this.state.employeeImage
    let employeeBackground = this.state.employeeBackground
    let employeeDOJ = this.state.employeeDOJ
    let employeeCountry = this.state.employeeCountry
    return (
      <div className="home">
        <Header name="Customer Engagement"/>
        <div className="employees-selector">
          {employees.map(employeeData => <EmployeePreview key={employeeData.id} handleEmployeeUpdate={this.handleEmployeeUpdate} {...employeeData} 
          />)}
        </div>
        <EmployeePage  employeeId={employeeId}
          employeeName = {employeeName}
          employeeImage = {employeeImage}
          employeeBackground = {employeeBackground}
          employeeDOJ = {employeeDOJ}
          employeeCountry = {employeeCountry}/>
        <Announcement />
      </div>
    );
  }
}
