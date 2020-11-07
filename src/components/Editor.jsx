import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TitleContainer from '../container/TitleContainer';
import EditorPane from './EditorPane';

const EditorBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

function Editor({width}) {
  return (
    <EditorBlock>
      <TitleContainer />
      <EditorPane width={width} />
    </EditorBlock>
  );
}

export default Editor;
