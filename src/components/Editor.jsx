import React from 'react';
import styled from 'styled-components';
import MdEditContainer from '../container/MdEditContainer';
import TitleContainer from '../container/TitleContainer';

const EditorBlock = styled.div`
  height: 100%;

  flex: 1;
`;

function Editor() {
  return (
    <EditorBlock>
      <TitleContainer />;
      <MdEditContainer />
    </EditorBlock>
  );
}

export default Editor;
