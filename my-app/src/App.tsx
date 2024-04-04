import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {
  return (
    <BrowserRouter basename="/Tomer-Biton/Tomer-s-Portfolio.git">
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;