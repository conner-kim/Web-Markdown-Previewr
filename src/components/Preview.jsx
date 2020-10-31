import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const PreviewBlock = styled.div`
  height: 100%;
  flex: 1;
  padding: 10px;

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
    margin: 1.5rem 0 1.5rem 0;
  }

  h2 {
    font-size: 2rem;
    margin: 1.25rem 0 1.25rem 0;
  }
  h3 {
    font-size: 1.75rem;
    margin: 1rem 0 1rem 0;
  }
  h4 {
    font-size: 1.5rem;
    margin: 1rem 0 1rem 0;
  }

  blockquote {
    border: 1px solid #27a9e3;
    padding: 20px;
    margin: 20px 0;
    font-size: 1.25rem;
    border: none;
    border-left: 0.5rem solid #27a9e3;
    background: #fefef4;
  }
`;
function createMarkup(text) {
  return { __html: text };
}

function Preview() {
  const text = useSelector((state) => state.edit.text);
  const mdParser = marked(text);

  return <PreviewBlock dangerouslySetInnerHTML={createMarkup(marked(text))} />;
}

export default Preview;
