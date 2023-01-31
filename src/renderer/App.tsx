import MemeMaker from 'pages/MemeMaker/Meme';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/meme" element={<MemeMaker />} />
        <Route path="*" element={<Link style={{color:'white'}} to='/'>404</Link>} />
      </Routes>
    </Router>
  );
}
