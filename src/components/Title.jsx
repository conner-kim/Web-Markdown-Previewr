import React from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 5rem;

  margin: 0;
  border: none;
  padding: 0 10px;
`;

function Title({ title, onChangeTitle }) {
  return (
    <TitleInput
      value={title}
      onChange={onChangeTitle}
      placeholder="제목을 입력하세요"
    />
  );
}

export default Title;
