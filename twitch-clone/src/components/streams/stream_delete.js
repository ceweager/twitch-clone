import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderContent() {

    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want to delete the stream named "${this.props.stream.title}"?`
  };

  render() {
    const { id } = this.props.match.params;
    const actions = (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative"> Delete </button>
        <Link to="/" className="ui button"> Cancel </Link>
      </React.Fragment>
    );

    return (
      <Modal
        onDismiss={() => { history.push("/") }}
        title="Delete Stream"
        content={this.renderContent()}
        actions={actions}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);