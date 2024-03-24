import { type Testimonio } from "../types/testimonios"

export const TestimonioCard: React.FC<Testimonio> = ({ nombre_completo, imagen, cargo, empresa, testimonial, pais, id }) => {
  return (
    <div key={id} className="md:w-[768px] md:h-[300px] bg-white text-slate-950 flex max-sm:flex-col md:flex-row mx-5 rounded-md">
      <img className="max-sm:w-full rounded-t-md rounded-bl-md" src={imagen} width={300} height={100} alt={`Imagen de ${nombre_completo}`} />
      <div className="p-2 flex flex-col gap-3 justify-center">
        <div className="text-center">
          <h2>Nombre: <span className="font-bold">{nombre_completo}</span></h2>
          <h2>País: <span className="font-bold">{pais}</span></h2>
          <h2>Cargo: <span className="font-bold">{cargo}</span></h2>
          <h2>Empresa: <span className="font-bold">{empresa}</span></h2>
        </div>
        <p className="italic p-3 text-sm">
          "{testimonial}"
        </p>
      </div>
    </div>
  )
}