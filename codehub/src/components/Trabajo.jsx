import './trabajo/empresas.css';
import { EmpresasCards } from './trabajo/Empresas';
export function Trabajo() {
  return (
    <div>
      <h2>Sección de Empresas</h2>
      <p>Aquí se mostrarán las empresas IT Uruguayas.</p>

      <EmpresasCards />
    </div>
  );
}