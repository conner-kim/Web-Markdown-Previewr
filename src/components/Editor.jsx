import React from 'react';
import styled from 'styled-components';
import MdEditContainer from '../container/MdEditContainer';
import TitleContainer from '../container/TitleContainer';

const EditorBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function Editor() {
  return (
    <EditorBlock>
      <TitleContainer />
      <MdEditContainer />
    </EditorBlock>
  );
}

export default Editor;
