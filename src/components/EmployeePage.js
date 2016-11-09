'use strict';

import React from 'react';

export default class EmployeePage extends React.Component {
  render() {
    const headerStyle = { backgroundImage: `url(/img/${this.props.employeeBackground})` };
    return (
      <div className="employee-full">
        <div className="employee">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${this.props.employeeImage}`}/>
            <h2 className="name">{this.props.employeeName}</h2>
          </div>
          <section className="description">
            Serving Tesco since <strong>{this.props.employeeDOJ}</strong>. Currently located in {this.props.employeeCountry}.
          </section>
        </div>
      </div>
    );
  }
}
