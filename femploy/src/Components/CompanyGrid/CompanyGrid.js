import React, { Component } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import image1 from './images/image1.jpg';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

// import the api to connect to airtable
import './CompanyGrid.css';

class CompanyGrid extends Component {
	state = {
		data: []
	}

	componentDidMount() {
		// getAirtable().then --> this is a promise
		this.setState({
			data: [
			{
				name: "Airbnb",
				img: image1
			},
			{
				name: "SAP",
				img: image2
			},
			{
				name: "IBM",
				img: image3
			},
			{
				name: "Accenture",
				img: image4

			},] 
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
				{this.state.data.map(thing => {
					return <CompanyCard pic={thing.img}/>
				} )}

			</div>
		</div>
		</div>
		);
	}


}

export default CompanyGrid;

