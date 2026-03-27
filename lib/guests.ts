export type Guest = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  highlighted?: boolean;
};

export const featuredGuests: Guest[] = [
  {
    id: "ilia-topuria",
    name: "Ilia Topuria",
    category: "Rendimiento / UFC",
    description:
      "Campeon mundial de UFC, referente de disciplina mental y ejecucion bajo presion extrema.",
    imageUrl:
      "https://images.unsplash.com/photo-1621724164074-2d5f3d9c4fbe?auto=format&fit=crop&w=1200&q=80",
    highlighted: true,
  },
  {
    id: "tengo-un-plan",
    name: "Tengo un Plan",
    category: "Emprendimiento / Negocios",
    description:
      "Canal y marca de negocios que democratiza estrategias de crecimiento, ventas y libertad financiera.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "salva-diaz",
    name: "Salva Diaz",
    category: "Salud / Biohacking",
    description:
      "Especialista en rendimiento humano, habitos y protocolos de salud para optimizar energia y foco.",
    imageUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "worldcast",
    name: "Worldcast",
    category: "Mentalidad / Actualidad",
    description:
      "Formato de conversacion sobre ideas, poder de perspectiva y lectura critica del contexto global.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dollar-dorrego",
    name: "Dollar Dorrego",
    category: "Mercados / Economia",
    description:
      "Analisis directo de ciclos economicos, decisiones financieras y oportunidades en escenarios de cambio.",
    imageUrl:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "neus-domenech",
    name: "Neus Domenech",
    category: "Marca Personal / Comunicacion",
    description:
      "Estratega de narrativa y posicionamiento para construir autoridad en mercados competitivos.",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "roca-project",
    name: "Roca Project",
    category: "Innovacion / Creatividad",
    description:
      "Vision practica sobre diseno de proyectos, ejecucion creativa y crecimiento sostenido.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "goro",
    name: "Goro",
    category: "Cultura / Lifestyle",
    description:
      "Conversaciones de alto contexto sobre tendencias culturales, identidad y evolucion personal.",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "spicy4tuna",
    name: "Spicy4tuna",
    category: "Contenido Digital / Comunidad",
    description:
      "Creador con enfoque en autenticidad, comunidad y formatos de contenido de alto engagement.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ted",
    name: "TED",
    category: "Ideas / Impacto Global",
    description:
      "Plataforma iconica de pensamiento que inspira conversaciones sobre ciencia, liderazgo y futuro.",
    imageUrl:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80",
  },
];
