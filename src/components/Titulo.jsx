import './titulo.css'
import pirata from '../assets/pirata.svg'

export function Titulo() {

  const texto = "CodeHub"

  return (
    <div className='divtitulo'>

      <h1 className='Titulo'>
        {texto.split("").map((letra, i) => (
          <span key={i} style={{animationDelay: `${i * 0.3}s`}}>
            {letra}
          </span>
        ))}
      </h1>

      <img src={pirata} alt="Pirata" className='imagen' />

    </div>
  )
}