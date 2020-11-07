import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
import './theme/MarkdownEditing.tmTheme';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/display/placeholder';

import './EditorPane.css';

const PaneBlock = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 100%;
  flex: 1;
`;

function EditorPane({width}) {
  const text = useSelector((state) => state.edit.text);
  const dispatch = useDispatch();
  const textareaRef = useRef();

  useEffect(() => {
    const codeMirror = CodeMirror.fromTextArea(textareaRef.current, {
      mode: 'markdown',
      theme: 'MarkdownEditing',
      lineNumbers: false, // 좌측에 라인넘버 띄우기
      lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
      enterMode: 'flat',
      autofocus: true,
      // scrollbarStyle: 'overlay',
    });
    codeMirror.setValue(text);

    // width값에 약 35px정도 더 들어가게 됨 scroll ??
    codeMirror.on('change', (doc) => {
      dispatch({type: 'edit/CHANGE_TEXT', text: doc.getValue()});
    });
  }, []);

  return (
    <PaneBlock width={width}>
      <textarea ref={textareaRef} placeholder="글을 입력해주세요."></textarea>
    </PaneBlock>
  );
}

export default EditorPane;
