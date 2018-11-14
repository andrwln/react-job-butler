import React, { Component } from 'react';
import CreateEditJob from '../components/CreateEditJob';

class EditJob extends Component {
  render() {
    return <CreateEditJob mode="Edit" id={this.props.query.id} />;
  }
}

export default EditJob;
