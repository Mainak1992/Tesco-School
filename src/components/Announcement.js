'use strict';

import React from 'react';

export default class Announcement extends React.Component {
 render() {
  return(
	<div className="announcement-bar">
		<div className="heading">Announcemnts</div>
		<ul className="announcement-list">
			<li>Nav/Carousel <b>LIVE</b>- 100%.</li>
			<li>Strategic page <b>LIVE</b>- 3%.</li>
		</ul>
	</div>

  );
}
}