import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Difference.css';

function Difference(props) {
	const { classes } = props; 
		return (
			<div className="difference">
				<Line
					data={props.diffData}
					width={50}
					height={25}
					options={{
						//maintainAspectRatio: false
						title: {
							display: true,
							text: 'Difference',
							fontSize: 20
						},
						legend: {
							display: true,
							position: 'right'
						}
					}}
				/>
			</div>
		)
}

export default Difference;