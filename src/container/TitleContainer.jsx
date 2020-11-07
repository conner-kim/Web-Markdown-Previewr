import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Title from '../components/Title';
import {onChangeTitle} from '../moduels/edit';

function TitleContainer() {
  const title = useSelector((state) => state.edit.title);
  const dispatch = useDispatch();

  return (
    <Title
      title={title}
      onChangeTitle={(e) => onChangeTitle(dispatch, e.target)}
    />
  );
}

export default TitleContainer;
