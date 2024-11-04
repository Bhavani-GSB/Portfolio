import Button from 'react-bootstrap/Button';
import './App.css';
// import { Header } from "./header/newHeader/siteHeader";
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import { NavFunction } from './content/navbar';
import { Content } from './content/content';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <NavFunction />
        <Content />
      </div>

  );
}

export default App;
