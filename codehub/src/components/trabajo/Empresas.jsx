import { useEffect, useState } from "react";
import "./empresas.css";

export function EmpresasCards() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch("/codehub/empresas.json")
      .then((res) => res.json())
      .then((data) => setEmpresas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="contenedorEmpresas">
      {empresas.map((empresa) => (
  <div key={empresa.id} className="cardE">
    <h3>{empresa.nombre}</h3>
    <p>{empresa.especialidad}</p>

    <a href={empresa.link} target="_blank" rel="noopener noreferrer">
      Visitar sitio
    </a>
  </div>
))}
    </div>
  );
}