import './App.css';
import MdEdit from './components/MdEdit';
import styled from 'styled-components';
import Preview from './components/Preview';

function App() {
  return (
    <div className="container">
      <MdEdit />
      <Preview />
    </div>
  );
}

export default App;
