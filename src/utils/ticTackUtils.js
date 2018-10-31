const isMatched = (cell1, cell2, cell3) => {
  return !!(cell1.toString() + cell2.toString() + cell3.toString()).match(/^(111|222)$/gi);
};


export const checkWinner = (board) => {
  console.log(board);
  if (isMatched(board[0][0], board[0][1], board[0][2])) return board[0][0];
  if (isMatched(board[1][0], board[1][1], board[1][2])) return board[1][0];
  if (isMatched(board[2][0], board[2][1], board[2][2])) return board[2][0];

  if (isMatched(board[0][0], board[1][0], board[2][0])) return board[0][0];
  if (isMatched(board[0][1], board[1][1], board[2][1])) return board[0][1];
  if (isMatched(board[0][2], board[1][2], board[2][2])) return board[0][2];

  if (isMatched(board[0][0], board[1][1], board[2][2])) return board[2][2];
  if (isMatched(board[0][2], board[1][1], board[2][1])) return board[2][0];

  return null;
};