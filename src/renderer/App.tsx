import MemeMaker from 'pages/MemeMaker/Meme';
import ReactAudioPlayer from 'react-audio-player';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import './App.css';

export default function App() {
  return (
   <>
      <header></header>
      <section className="cyberpunk">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/meme" element={<MemeMaker />} />
            <Route path="*" element={<Link style={{color:'white'}} to='/'>404</Link>} />
          </Routes>
        </Router>
        <ReactAudioPlayer
              src="https://od.lk/s/NDNfMjcxNjQwOTRf/CyberPunk%20Best.mp3"
              autoPlay
              loop
              volume={0.03}
          />
      </section>
      <footer></footer>
   </> 
  );
}
