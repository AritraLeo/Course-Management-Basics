interface Action {
  type: string;
  payload: Course | null;
}

const initialState: Course | null = null;

const courseReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_COURSE':
      return action.payload;
    default:
      return state;
  }
};

export default courseReducer;
