import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobsList from '../components/JobsList';

class Jobs extends Component {
  render() {
    const { dispatch, jobs } = this.props;
    return <JobsList jobs={jobs} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Jobs);
