import MemeMaker from 'pages/MemeMaker/Meme';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemeMaker />} />
      </Routes>
    </Router>
  );
}
