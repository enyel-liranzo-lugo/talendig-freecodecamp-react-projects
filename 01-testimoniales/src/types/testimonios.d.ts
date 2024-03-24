export type Testimonios = {
  testimonios: Testimonio[];
}

export type Testimonio = {
  id: number;
  nombre_completo: string;
  imagen: string;
  pais: string;
  cargo: string;
  empresa: string;
  testimonial: string;
}
