export type Guest = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  status?: "upcoming" | "inspiration";
  highlighted?: boolean;
};

export const featuredGuests: Guest[] = [
  {
    id: "ilia-topuria",
    name: "Ilia Topuria",
    category: "Rendimiento / UFC",
    description:
      "Referencia de disciplina mental, ejecucion bajo presion extrema y consistencia competitiva.",
    imageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    status: "inspiration",
    highlighted: true,
  },
  {
    id: "tengo-un-plan",
    name: "Tengo un Plan",
    category: "Emprendimiento / Negocios",
    description:
      "Caso de estudio de comunicacion empresarial, posicionamiento de marca y crecimiento digital.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    status: "inspiration",
  },
  {
    id: "salva-diaz",
    name: "Salva Diaz",
    category: "Salud / Biohacking",
    description:
      "Marco de referencia en rendimiento humano, habitos y optimizacion de energia para alto output.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "worldcast",
    name: "Worldcast",
    category: "Mentalidad / Actualidad",
    description:
      "Inspiracion en narrativa de actualidad, pensamiento critico y conversacion con contexto.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "dollar-dorrego",
    name: "Dollar Dorrego",
    category: "Mercados / Economia",
    description:
      "Referencia para analizar ciclos economicos y toma de decisiones financieras en incertidumbre.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "neus-domenech",
    name: "Neus Domenech",
    category: "Marca Personal / Comunicacion",
    description:
      "Modelo de comunicacion estrategica para construir autoridad en mercados competitivos.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "roca-project",
    name: "Roca Project",
    category: "Innovacion / Creatividad",
    description:
      "Inspiracion en ejecucion creativa, diseno de proyectos y crecimiento sostenido.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "goro",
    name: "Goro",
    category: "Cultura / Lifestyle",
    description:
      "Referencia en lectura cultural y construccion de identidad dentro de ecosistemas digitales.",
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "spicy4tuna",
    name: "Spicy4tuna",
    category: "Contenido Digital / Comunidad",
    description:
      "Benchmark de contenido autentico, comunidad fuerte y formatos con alto engagement.",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    status: "upcoming",
  },
  {
    id: "ted",
    name: "TED",
    category: "Ideas / Impacto Global",
    description:
      "Estandar global de conversaciones de ideas con impacto en ciencia, liderazgo y futuro.",
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    status: "inspiration",
  },
];
