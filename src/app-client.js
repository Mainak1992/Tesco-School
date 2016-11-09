'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeBasePage from './components/EmployeeBasePage';

window.onload = () => {
  ReactDOM.render(<EmployeeBasePage/>, document.getElementById('main'));
};
