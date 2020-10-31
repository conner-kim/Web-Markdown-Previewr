import React from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 5rem;

  margin: 0;

  outline: none;
  border: none;

  &::placeholder {
    color: #adb5bd;
  }
`;

const UnderLine = styled.div`
  width: 4rem;
  height: 0.5rem;
  background: #845ef7;
  margin-top: 1rem;
  margin-bottom: 20px;
`;

function Title({ title, onChangeTitle }) {
  return (
    <>
      <TitleInput
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요"
      />
      <UnderLine />
    </>
  );
}

export default Title;
