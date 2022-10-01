import * as tabActions from '../actions/tab.actions';

const initialState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActions.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };

    default:
      return state;
  }
};

export default tabReducer;
