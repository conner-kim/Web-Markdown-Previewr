import {useEffect, useState} from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getWidth = (window.innerWidth - 80 - 12) / 2;
    console.log(getWidth);

    setWidth(getWidth);
    console.log(width);
  }, []);

  console.log(width);

  return (
    <div className="container">
      <Editor width={width} />
      <Preview width={width} />
    </div>
  );
}

export default App;
