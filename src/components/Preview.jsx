import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

const PreviewBlock = styled.div`
  width: ${(props) => `${props.width}px`};
  flex: 1;
  padding-left: 1rem;
  word-wrap: break-word;
  box-sizing: border-box;
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

  a {
    color: #5f3dc4;
  }

  a,
  a:visited,
  a:active {
    text-decoration: none;
  }

  blockquote {
    border: 1px solid #27a9e3;
    padding: 0.6rem;
    margin: 20px 0;
    font-style: italic;
    font-size: 1.2rem;
    border: none;
    border-left: 0.5rem solid #b197fc;
  }
`;
function createMarkup(text) {
  return {__html: text};
}

function Preview({width}) {
  const {text, title} = useSelector((state) => state.edit);
  const createTitle = `# ${title} \n`;
  const previewHtml = createTitle + text;

  marked.setOptions({
    hilight: (code) => hljs.highlightAuto(code, javascript).value,
  });

  return (
    <PreviewBlock
      width={width}
      dangerouslySetInnerHTML={createMarkup(
        marked(previewHtml, {
          breaks: true,
        })
      )}
    />
  );
}

export default Preview;
