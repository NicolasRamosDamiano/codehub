import './filtrador.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Filtrador() {
  const [paginas, setPaginas] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}paginas.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error('No se pudo cargar el archivo');
        }
        return res.json();
      })
      .then(data => setPaginas(data))
      .catch(err => setError(err.message)); // Guardar el error
  }, []);

  const paginasFiltradas = paginas.filter(pagina => {
    if (categoria === '') return true;
    return pagina.categoria === categoria;
  });

 return (
  <div className='filtro'>
    {error ? (
      <p className='error'>Error: {error}</p>
    ) : (
      <>
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
<Link to="/trabajo" className="btn-empresas">
  Empresas
</Link>
        </div>

        <div className="contenedor">
          {paginasFiltradas.map((pagina) => (
            <div key={pagina.id} className="tarjeta">
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
      </>
    )}
  </div>
);}