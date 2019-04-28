const DEFAULT_STATE = {
  time: new Date().toLocaleTimeString()
};

export const clockReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
};
