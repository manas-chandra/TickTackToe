import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalDialog extends Component {
  render() {
    return (
      <div id="myModal" className="modal" style={{display: `${this.props.winner ? 'block' : 'none' }`}}>

        <div className="modal-content">
          <div className={"content"}>
            <div className={'winner'}>Winner of the game is <strong>Player {this.props.winner}</strong></div>
            <div className={'reset'}>
              <button className={'btn-reset'} onClick={() => this.props.resetBoard()}>Reset</button>
            </div>
          </div>
        </div>

      </div>
  );
  }
}

ModalDialog.propTypes = {
  winner: PropTypes.number,
  resetBoard: PropTypes.func
};

export default ModalDialog;
