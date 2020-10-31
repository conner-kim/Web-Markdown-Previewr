const initialState = {
  title: '',
  text: '',
};

// action type
const CHANGE_TEXT = 'edit/CHANGE_TEXT';
const CHANGE_TITLE = 'edit/CHANGE_TITLE';

export const onChange = (dispatch, target) => {
  const text = target.value;

  dispatch({ type: CHANGE_TEXT, text });
};
export const onChangeTitle = (dispatch, target) => {
  const title = target.value;
  dispatch({ type: CHANGE_TITLE, title });
};

export default function edit(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.text,
      };
    default:
      return state;
  }
}
