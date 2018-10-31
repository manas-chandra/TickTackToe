import {ACTION_PERFORMED, RESET_BOARD} from '../constants/ticConstants';

export const userAction = (player,rowIndex, columnIndex) => {
  return {
    type: ACTION_PERFORMED,
    payload: {
      player, rowIndex, columnIndex
    }
  }
};

export const resetBoard = () => {
  return {
    type: RESET_BOARD
  }
};