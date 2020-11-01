import React from 'react';
import MdEdit from '../components/MdEdit';
import { useSelector, useDispatch } from 'react-redux';

function MdEditContainer() {
  const text = useSelector((state) => state.edit.text);
  const dispatch = useDispatch();

  return <MdEdit text={text} dispatch={dispatch} />;
}

export default MdEditContainer;
