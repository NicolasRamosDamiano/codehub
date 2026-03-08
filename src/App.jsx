import { useState, useEffect } from 'react';
import './App.css';
import { Titulo } from './components/Titulo';
import { Filtrador } from './components/filtrador';


function App() {
  const [paginas, setPaginas] = useState([]);

  useEffect(() => {
    fetch('/paginas.json')
      .then(res => res.json())
      .then(data => setPaginas(data))
      .catch(err => console.error('Error al cargar JSON:', err));
  }, []);

  return (
    <div>
      <Titulo />

      <Filtrador />
      
    </div>
  );}

export default App;