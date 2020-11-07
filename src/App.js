import {useEffect, useState} from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [width, setWidth] = useState(0);
  const visibleValue = 768 / 2 - 80 - 12;

  useEffect(() => {
    const getWidth = (window.innerWidth - 80 - 12) / 2;
    setWidth(getWidth);
    window.addEventListener('resize', () => {
      setWidth((window.innerWidth - 80 - 12) / 2);
    });
  }, []);

  return (
    <div className="container">
      <Editor width={width} />
      {width > visibleValue && <Preview width={width} />}
    </div>
  );
}

export default App;
