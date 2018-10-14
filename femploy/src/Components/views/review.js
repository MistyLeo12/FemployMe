import React, { Component } from "react";

import Form from '../../Form.js';
import Rating from 'react-rating';

import {Link} from 'react-router-dom';

import './review.css'

export default class Review extends Component {
	onSubmit = fields => {
    	console.log("App got ", fields);
	}

  render() {
    return (
      <div id="review">
        This is the review  page.
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}