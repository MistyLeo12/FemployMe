import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';

import './ProgressBar.css';

function ProgressBar(props) {
	const { classes } = props; 
		return (
			<div className="progress">
				<Line percent={props.percent} strokeWidth="6" strokeColor="#FF5733" />
				{/*<Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />*/}
			</div>
		)
}

export default ProgressBar;