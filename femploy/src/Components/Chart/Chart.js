import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './Chart.css';

function Chart(props) {
	const { classes } = props; 
		return (

			<div className="chart">
				<Doughnut
					data={props.chartData}
					width={50}
					height={25}
					options={{
						//maintainAspectRatio: false
						title: {
							display: true,
							text: 'Rating',
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

export default Chart;