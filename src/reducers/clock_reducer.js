const DEFAULT_STATE = {
  time: new Date().toLocaleTimeString()
};

export const clockReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case 'UPDATE_TIME':
      return {
        time: new Date().toLocaleTimeString()
      }
    default:
      return state;
  }
};
