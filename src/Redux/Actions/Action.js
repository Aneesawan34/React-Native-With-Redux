import * as types from './Types';

export const appAction = () => {
  return {
    type: types.CHANGE_NAME,
    payload: types.PAYLOAD_NAME,
  };
};

export const appActionFakeApi = () => {
  return async dispatch => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const pureData = await data.json();
    dispatch({type: types.CHANGE_NAME, payload: pureData[0].name});
  };
};
