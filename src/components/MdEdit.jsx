import React from 'react';
import styled from 'styled-components';
import { onChange } from '../moduels/edit';
import { useSelector, useDispatch } from 'react-redux';

const Editor = styled.textarea`
  background: #0876ad;
  font-size: 1.25rem;
  outline: none;
  border: none;
  resize: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  flex: 1;
`;

function MdEdit() {
  const text = useSelector((state) => state.edit.text);
  const dispatch = useDispatch();

  return <Editor onChange={(e) => onChange(dispatch, e.target)} value={text} />;
}

export default MdEdit;
