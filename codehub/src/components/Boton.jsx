import './Boton.css';
import { Link } from 'react-router-dom';


export function Boton() {
  return (
    <div className="empresas">
      <Link to="/trabajo">
        <button>Empresas</button>
      </Link>
    </div>
  );
}