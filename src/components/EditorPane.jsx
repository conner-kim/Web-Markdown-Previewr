import React, { useEffect, useRef, useState } from 'react';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';

function EditorPane() {
  const [text, setText] = useState('');
  const textareaRef = useRef();
  useEffect(() => {
    console.log(textareaRef);

    const codeMirror = CodeMirror.fromTextArea(textareaRef.current, {
      mode: 'markdown',
      theme: 'material',
      lineNumbers: true, // 좌측에 라인넘버 띄우기
      lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
      placeholder: '당신의 이야기를 적어보세요...',
      // scrollbarStyle: 'overlay',
    });
  }, [textareaRef]);
  // codeMirror.on('change', setText(codeMirror.getValue()));
  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
}

export default EditorPane;
