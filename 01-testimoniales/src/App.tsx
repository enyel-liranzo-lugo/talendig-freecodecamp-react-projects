import testimoniales from './json/testimoniales.json'
import { TestimonioCard } from './components/TestimonioCard'

function App(): JSX.Element {
  return (
    <div>

      <h1 className='mt-10 mb-10 text-center text-3xl font-bold'>Esto es lo que dicen nuestros alumnos de freeCodeCamp:</h1>

      <div className='flex flex-col gap-y-10 mb-10'>
        {
          testimoniales.testimonios.map(testimonio => {
            return (
              <TestimonioCard
                key={testimonio.id}
                id={testimonio.id}
                nombre_completo={testimonio.nombre_completo}
                imagen={testimonio.imagen}
                pais={testimonio.pais}
                cargo={testimonio.cargo}
                empresa={testimonio.empresa}
                testimonial={testimonio.testimonial}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
