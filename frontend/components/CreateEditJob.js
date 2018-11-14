import React, { Component } from 'react';
import Router from 'next/router';
import axios from 'axios';

import firebase from '../store/firebase';
import Form from './styled/Form';

class CreateEditJob extends Component {
  state = {
    job: { company_name: '', position_title: '', current_status: '' },
    isLoading: false
  };
  async componentWillMount() {
    if (this.props.mode === 'Edit') {
      this.setState({ isLoading: true });
      const jobRef = await firebase
        .collection('jobs')
        .doc(this.props.id)
        .get();
      this.setState({ job: jobRef.data(), isLoading: false });
    }
  }
  saveToState = e => {
    this.setState({
      job: { ...this.state.job, [e.target.name]: e.target.value }
    });
  };
  scrapePosting = async e => {
    const Axios = axios.create({});
    const url = e.target.value;
    const response = await Axios.post(
      `http://${process.env.SCRAPER_API}/joblink`,
      {
        url_path: url
      }
    );
    console.log('post response: ', url, response);
  };
  handleSubmit = async e => {
    e.preventDefault();
    const job = { ...this.state.job };
    const { mode } = this.props;
    const jobsCollection = firebase.collection('jobs');
    if (mode === 'Add') {
      await jobsCollection.add(job);
    } else if (mode === 'Edit') {
      const job_id = this.props.id;
      await jobsCollection.doc(job_id).update(job);
    }
    Router.push('/jobs');
  };
  render() {
    const { mode } = this.props;
    const { job, isLoading } = this.state;
    return (
      <div>
        <h1>{mode} Job</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Form method="post" onSubmit={this.handleSubmit}>
            <label>
              Job URL
              <input
                type="text"
                name="url"
                placeholder="Job URL"
                value={job.url}
                onChange={this.scrapePosting}
              />
            </label>
            <label>
              Company Name
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                value={job.company_name}
                onChange={this.saveToState}
              />
            </label>
            <label>
              Position Title
              <input
                type="text"
                name="position_title"
                placeholder="Position Title"
                value={job.position_title}
                onChange={this.saveToState}
              />
            </label>
            <label>
              Status
              <input
                type="text"
                name="current_status"
                placeholder="Status"
                value={job.current_status}
                onChange={this.saveToState}
              />
            </label>
            <button type="submit">{mode} Job</button>
          </Form>
        )}
      </div>
    );
  }
}

export default CreateEditJob;
