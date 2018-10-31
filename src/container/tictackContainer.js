import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userAction, resetBoard} from "../actions/ticActions";
import ModalDialog from "../utils/ModalDialog";

class TicTackContaner extends Component {

  userAction(rowIndex, columnIndex) {
    const player = this.props.player === 1 ? 2 : 1;
    if (!this.props.winner && (this.props.board[rowIndex][columnIndex] === 0)) {
      this.props.userAction(player,rowIndex, columnIndex);
    }
  }

  renerBody() {
    const rows = this.props.board.map((br, rowIndex) => {
     return (
       <div className={'row'} key={rowIndex}>
         {
           br.map((value, columnIndex) => <div key={columnIndex} disabled={!!value} className={`column ${value !== 0 ? (value == 1 ? 'player1' : 'player2') : null}`} onClick={this.userAction.bind(this, rowIndex, columnIndex)}> {value !== 0? (value === 1 ? 'X' : '0') : ''}</div>)
         }
       </div>
     );
    });

    return rows;
  }

  render() {
    return (
      <div>
        <div className={'reset'}>
          <button className={'btn-reset'} onClick={() => this.props.resetBoard()}>Reset</button>
        </div>
        <div className={'ticTacToe'}>
          {
            this.renerBody()
          }
          <ModalDialog winner={this.props.winner} resetBoard={this.props.resetBoard}/>
        </div>
      </div>
    );
  }
}

TicTackContaner.propTypes = {
  resetBoard: PropTypes.func,
  player: PropTypes.number,
  board: PropTypes.array,
  winner: PropTypes.number,
};

const mapStateToProps = state => ({
  player: state.tick.player,
  board: state.tick.board,
  winner: state.tick.winner
});

export default connect(mapStateToProps, {userAction, resetBoard})(TicTackContaner);
