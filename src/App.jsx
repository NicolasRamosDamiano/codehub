import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Titulo } from './components/Titulo';
import { Filtrador } from './components/Filtrador';
import { Routes, Route } from 'react-router-dom';
import { Trabajo } from './components/trabajo';
import BorderGlow from "./components/BorderGlow";

function App() {
  return (
    <BrowserRouter basename="/codehub">
      <div>
        <Titulo />
       <BorderGlow>
        <Routes>
          <Route path="/" element={<Filtrador />} />
          <Route path="/trabajo" element={<Trabajo />} />
        </Routes>
        </BorderGlow>
      </div>
    </BrowserRouter>
  );
}

export default App;