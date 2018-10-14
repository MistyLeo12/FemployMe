import React from 'react';
import Rating from 'react-rating';
import axios from 'axios';

//import './App'

export default class Form extends React.Component {
  state = {
    company: '',
    position: '',
    salary: 20,
    equal_treatment: 1,
    gender_diversity: 1,
    mobility: 1,
    maternity: 1,
    flex: '',
    FourK: '',
    healthcare: '',
    recommend: '',
    Review: '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeI = e => {
    this.setState({
      [e.target.name]: 40
    })
  }



  changeC = e => {
    var a = ["reccj3yBmqmBbmv58" ]
    this.setState({
      [e.target.name]: a
    })
  }

  setRating = (ratingTag, num) => {
    this.setState ({
      [ratingTag]: num
    })
  }



  onSubmit = e => {
    // var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');

    //console.log(base);
    e.preventDefault();
    this.props.onSubmit(this.state);
    //console.log(this.state);
    //

      axios.post('https://api.airtable.com/v0/app7RMaUfSoIVwdde/user', {fields:this.state},
        {headers : {Authorization: 'Bearer keyWvlXmSn55006bY'}})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    this.setState({
      company: '',
      position: '',
      salary: '',
      equal_treatment: '',
      gender_diversity: '',
      mobility: '',
      maternity: '',
      flex: '',
      FourK: '',
      healthcare: '',
      recommend: '',
      Review: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      // <div class="mdc-form-field">
      <form>
        <label>Company:</label><input name="company" placeholder="Company" value={this.state.company} onChange={e => this.changeC(e)} /><br />
        <label>Position:</label><input name="position" placeholder="Position" value={this.state.position} onChange={e => this.change(e)} /><br />
        <label>Annual Salary (thousands):</label><input name="salary" placeholder="salary" value={this.state.salary} onChange={e => this.changeI(e)} /><br />
        <label>How satisfied are you with the treatment of women compared to men at your company?</label><Rating {...this.props} onClick={(value) => this.setRating('equal_treatment', value)}/><br />
        <label>How satisfied are you with the gender diversity of your company's workfoce?</label><Rating {...this.props} onClick={(value) => this.setRating('gender_diversity', value)}/><br />
        <label>How satisfied are you with the opportunities for career advancement within your company?</label><Rating {...this.props} onClick={(value) => this.setRating('mobility', value)}/><br />
        <label>How many weeks of paid maternity leave were you offered?</label><Rating {...this.props} onClick={(value) => this.setRating('maternity', value)}/><br />
        <label>Does your company offer flex-time?</label><input name="flex" placeholder="sdf" value={this.state.flex} onChange={e => this.change(e)} /><br />
        <label>Does your company offer 401k?</label><input name="FourK" placeholder="sdf" value={this.state.k401} onChange={e => this.change(e)} /><br />
        <label>Does your company provide health insurance?</label><input name="healthcare" placeholder="sdf" value={this.state.healthcare} onChange={e => this.change(e)} /><br />
        <label>Would you recommend this job to other women?</label><input name="recommend" placeholder="sdf" value={this.state.recommend} onChange={e => this.change(e)} /><br />
        <label>Leave a review</label><input name="Review" placeholder="Review" value={this.state.Review} onChange={e => this.change(e)} /><br />



        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      // </div>

    );
  }
}