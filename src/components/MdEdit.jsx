import React from 'react';
import styled from 'styled-components';
import { onChange } from '../moduels/edit';
import { useSelector, useDispatch } from 'react-redux';

const Editor = styled.textarea`
  height: 100vh;
  background: #0876ad;
  flex: 1;

  font-size: 1.25rem;

  outline: none;
  border: none;
`;

function MdEdit() {
  const text = useSelector((state) => state.edit.text);
  const dispatch = useDispatch();

  return <Editor onChange={(e) => onChange(dispatch, e.target)} value={text} />;
}

export default MdEdit;
