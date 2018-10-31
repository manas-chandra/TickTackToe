import {ACTION_PERFORMED, RESET_BOARD} from '../constants/ticConstants';
import {checkWinner} from '../utils/ticTackUtils'

const initalState = {
  player: null,
  board: [[0,0,0], [0,0,0], [0,0,0]],
  winner: null
};

const boardReducer = (state=initalState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case ACTION_PERFORMED:
      const row = nextState.board[action.payload.rowIndex];

      row[action.payload.columnIndex] = action.payload.player ? action.payload.player : 1;
      nextState.player = action.payload.player ? action.payload.player : 1;

      nextState.winner = checkWinner(nextState.board);

      return nextState;
    case RESET_BOARD:
      return {
        player: null,
        board: [[0,0,0], [0,0,0], [0,0,0]],
        winner: null
      };
    default:
      return state;
  }
};

export default boardReducer;