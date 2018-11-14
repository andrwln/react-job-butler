import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../store/firebase';
import JobsList from '../components/JobsList';
import { setJobsList } from '../store/actions';

class Jobs extends Component {
  async componentDidMount() {
    const jobsRef = firebase.collection('jobs');
    const jobs = [];
    const snapshot = await jobsRef.get();
    snapshot.forEach(doc => {
      jobs.push({ ...doc.data(), id: doc.id });
    });
    this.props.dispatch(setJobsList({ jobs }));
  }
  render() {
    const { dispatch, jobs } = this.props;
    return <JobsList jobs={jobs} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Jobs);
