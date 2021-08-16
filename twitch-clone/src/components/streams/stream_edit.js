import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './stream_form';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id, { ...formValues })
  }

  render() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <h3>Edit Stream "{`${this.props.stream.title}`}"</h3>
        <StreamForm initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, updateStream })(StreamEdit);