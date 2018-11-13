import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';

import firebase from '../store/firebase';
import { saveJob } from '../store/actions';

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

class NewJob extends Component {
  state = {
    company_name: 'Sample Company',
    position_title: 'Sample Position',
    current_status: 'Status'
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('state: ', this.state);
  };
  addJob = async e => {
    e.preventDefault();
    const job = { ...this.state };
    await firebase.collection('jobs').add(job);
    // this.props.dispatch(saveJob({ job }));
    Router.push('/jobs');
  };
  render() {
    return (
      <div>
        <h1>Add New Job</h1>
        <Form method="post" onSubmit={this.addJob}>
          <label>
            Company Name
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={this.state.company_name}
              onChange={this.saveToState}
            />
          </label>
          <label>
            Position Title
            <input
              type="text"
              name="position_title"
              placeholder="Position Title"
              value={this.state.position_title}
              onChange={this.saveToState}
            />
          </label>
          <label>
            Status
            <input
              type="text"
              name="current_status"
              placeholder="Status"
              value={this.state.current_status}
              onChange={this.saveToState}
            />
          </label>
          <button type="submit">Add Job</button>
        </Form>
      </div>
    );
  }
}

export default connect()(NewJob);
