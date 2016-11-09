'use strict';

import React from 'react';
import { Link } from 'react-router';
import employees from '../data/employees';

export default class EmployeesMenu extends React.Component {
  render() {
    return (
      <nav className="employees-menu">
        {employees.map(menuEmployee => {
          return <Link key={menuEmployee.id} to={`/employee/${menuEmployee.id}`} activeClassName="active">
            {menuEmployee.name}
          </Link>;
        })}
      </nav>
    );
  }
}
