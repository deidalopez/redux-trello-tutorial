const { CREATE_COLUMN, CREATE_TASK, MOVE_TASK } = require('./actions');
const initialState = require('./init');

const constructColumn = (title) => ({
  title,
  tasks: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLUMN:
      return {
        ...state,
        board: state.board.concat(constructColumn(action.payload)),
      }
    case CREATE_TASK:
      return {
        ...state,
        board: state.board.map((column, index) => {
          if (index === action.payload.columnIndex) {
            return {
              ...column,
              tasks: column.tasks.concat(action.payload.title)
            }
          }
          return column;
        })
      }
    case MOVE_TASK:
      return {
        ...state,
        board: state.board.map((column, index) => {
          if (index === action.payload.columnFrom) {
            return {
              ...column,
              tasks: column.tasks.filter((task) => task !== action.payload.title)
            }
          }
          if (index === action.payload.columnTo) {
            return {
              ...column,
              tasks: column.tasks.concat(action.payload.title)
            }
          }
          return column;
        })
      }
    default:
      return state;
  }
};

module.exports = reducer;
