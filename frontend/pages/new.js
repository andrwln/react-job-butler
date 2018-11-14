import React, { Component } from 'react';
import CreateEditJob from '../components/CreateEditJob';

class NewJob extends Component {
  render() {
    return <CreateEditJob mode="Add" />;
  }
}

export default NewJob;
