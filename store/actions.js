const CREATE_COLUMN = 'CREATE_COLUMN';
const CREATE_TASK = 'CREATE_TASK';
const MOVE_TASK = 'MOVE_TASK';

/**
 * interface Action {
 *   type: enum ActionType;
 *   payload: any
 * }
 */

function createColumn(title) {
  return {
    type: CREATE_COLUMN,
    payload: title,
  }
}

function createTask(title, columnIndex) {
  return {
    type: CREATE_TASK,
    payload: { title, columnIndex },
  }
}

function moveTask(title, columnFrom, columnTo) {
  return {
    type: MOVE_TASK,
    payload: { title, columnTo, columnFrom },
  }
}

module.exports = {
  CREATE_COLUMN,
  CREATE_TASK,
  MOVE_TASK,
  createColumn,
  createTask,
  moveTask,
};
