const initialState = {
  text: '',
};

// action type
const CHANGE_TEXT = 'edit/CHANGE_TEXT';

export const onChange = (dispatch, target) => {
  const text = target.value;

  dispatch({ type: CHANGE_TEXT, text });
};

export default function edit(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        text: action.text,
      };
    default:
      return state;
  }
}
