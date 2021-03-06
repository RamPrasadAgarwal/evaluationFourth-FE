import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './score.css';

class Score extends Component {
  render() {
    return (
      <div className={this.props.user === this.props.list.username ? 'score-div green' : 'score-div'}>
        <div className="score-index">
          {this.props.count}.
        </div>
        <span className="score-div-element">
          {this.props.list.username}
        </span>
        <span className="score-div-element right">
          {this.props.list.score}
        </span>
      </div>
    );
  }
}

export default Score;
Score.propTypes = {
  user: PropTypes.string,
  list: PropTypes.shape({
    username: PropTypes.string,
    score: PropTypes.number,
  }),
  count: PropTypes.number,

};

Score.defaultProps = {
  user: '',
  list: {
    username: '',
    score: 0,
  },
  count: 0,
};

