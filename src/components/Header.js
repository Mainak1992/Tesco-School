'use strict';

import React from 'react';

export default class Announcement extends React.Component {
 render() {
  return(
	<div className="pageheader">
		<span className="headerName">{this.props.name}</span>
	</div>

  );
}
}