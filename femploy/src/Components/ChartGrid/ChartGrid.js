import React, { Component } from 'react';
import Chart from '../Chart/Chart';

import './ChartGrid.css';


class ChartGrid extends Component {
	state = {
		chartData: []
	}

	componentDidMount() {
		// CALL API, PROMISE
		this.setState({
			chartData: [
			{
				datasets: [
					{
						label: "Rating",
						data: [
							75,
							25
						],
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)'
							//'rgba(255, 206, 86, 0.6)'
						]
					}
				]
			},
			{
				datasets: [
					{
						label: "Rating",
						data: [
							45,
							55
						],
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)'
							//'rgba(255, 206, 86, 0.6)'
						]
					}
				]
			},
			{
				datasets: [
					{
						label: "Rating",
						data: [
							10,
							90
						],
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)'
							//'rgba(255, 206, 86, 0.6)'
						]
					}
				]
			}
			]


			//}
		});
	}
	/*
	changeText = (text) => {
		
	}
	*/
	render() {
		return (
		<div className="wrapper">
		<div className ="rows">
			<div className ="row"> 
				{/*<Chart chartData ={this.state.chartData} legendPosition="bottom"/>*/}

				{this.state.chartData.map(thing => {
					return <Chart chartData={thing}/>
				} ) }
			</div>
		</div>
		</div>
		);
	}


}

export default ChartGrid;

