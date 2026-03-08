import './filtrador.css';
import { useState, useEffect } from 'react';

export function Filtrador() {
  const [paginas, setPaginas] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    fetch('/paginas.json')
      .then(res => res.json())
      .then(data => setPaginas(data))
      .catch(err => console.error('Error al cargar JSON:', err));
  }, []);

  const paginasFiltradas = paginas.filter(pagina => {
    if (categoria === '') return true;
    return pagina.categoria === categoria;
  });

  return (
    <div className='filtro'>
      <div className='botones'>
        <button onClick={() => setCategoria('')}>Todas</button>
        <button onClick={() => setCategoria('documentacion')}>Documentación</button>
        <button onClick={() => setCategoria('aprendizaje')}>Aprendizaje</button>
        <button onClick={() => setCategoria('comunidad')}>Comunidad</button>
        <button onClick={() => setCategoria('recursos_ui')}>UI / Recursos</button>
        <button onClick={() => setCategoria('imagenes')}>Imágenes</button>
        <button onClick={() => setCategoria('herramientas')}>Herramientas</button>
        <button onClick={() => setCategoria('productividad')}>Productividad</button>
        <button onClick={() => setCategoria('deploy')}>Deploy</button>
        <button onClick={() => setCategoria('apis')}>APIs</button>
      </div>
      <div className="contenedor">
        {paginasFiltradas.map((pagina, index) => (
          <div key={index} className="tarjeta">
            <img
              className="preview"
              src={`https://api.microlink.io/?url=${pagina.link}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={pagina.nombre}
            />
            <div className="info">
              <img
                className="favicon"
                src={`https://www.google.com/s2/favicons?domain=${pagina.link}`}
                alt="favicon"
              />
              <h2>{pagina.nombre}</h2>
            </div>
            <p>{pagina.descripcion}</p>
            <p>{pagina.categoria}</p>
            <a href={pagina.link} target="_blank" rel="noopener noreferrer">Visitar</a>
          </div>
        ))}
      </div>
    </div>
  );
}