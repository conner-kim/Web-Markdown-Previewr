import React from 'react';
import styled from 'styled-components';
import TitleContainer from '../container/TitleContainer';
import EditorPane from './EditorPane';

const EditorBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function Editor() {
  return (
    <EditorBlock>
      <TitleContainer />
      <EditorPane />
    </EditorBlock>
  );
}

export default Editor;
