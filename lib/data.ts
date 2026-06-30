export const siteConfig = {
  name: "Mosaico Viagens",
  tagline: "Viagens sob medida, do seu jeito",
  description:
    "Agência de viagens boutique. Roteiros personalizados, atendimento humano e curadoria cuidadosa para cada cliente.",
  whatsappNumber: "5511976156878",
  whatsappDisplay: "+55 (11) 97615-6878",
  email: "contato@mosaicoviagens.com.br",
  instagram: "@mosaicoviagens",
  url: "https://elopass-mvp.vercel.app",
} as const;

export const agent = {
  name: "Paula Moreno",
  role: "Agente de viagens",
  photo: "/agent.jpg",
  photoAlt: "Foto da agente",
  bio: [
    "Há mais de uma década ajudando pessoas a transformar o sonho de viajar em realidade. Acredito que cada viagem é única — como quem a faz.",
    "Trabalho com curadoria personalizada: ouço o que você imagina, pesquiso as melhores opções e monto um roteiro que cabe no seu jeito, no seu tempo e no seu bolso.",
    "Meu compromisso é estar do seu lado antes, durante e depois da viagem — porque uma boa experiência não começa no embarque, começa na primeira conversa.",
  ],
} as const;

export const services = [
  {
    id: "honeymoon",
    title: "Lua de mel",
    description:
      "Roteiros românticos pensados nos mínimos detalhes para celebrar esse momento único.",
    icon: "Heart",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "family",
    title: "Em família",
    description:
      "Viagens que unem pais, filhos e avós em experiências inesquecíveis para todas as idades.",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "adventure",
    title: "Aventura",
    description:
      "Trilhas, mergulhos e expedições pra quem busca adrenalina e contato com a natureza.",
    icon: "Compass",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "corporate",
    title: "Corporativo",
    description:
      "Eventos, convenções e viagens de incentivo com logística cuidada e suporte total.",
    icon: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "group",
    title: "Em grupo",
    description:
      "Viagens coletivas com curadoria, programação e acompanhamento de ponta a ponta.",
    icon: "UsersRound",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "resort",
    title: "Resort & Praia",
    description:
      "All-inclusive, resorts à beira-mar e destinos paradisíacos pra relaxar de verdade.",
    icon: "TreePalm",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const destinations = [
  {
    slug: "fernando-de-noronha",
    name: "Fernando de Noronha",
    location: "Pernambuco, Brasil",
    image:
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Águas cristalinas, vida marinha exuberante e algumas das praias mais bonitas do mundo.",
    priceFrom: 8900,
    duration: "5 dias",
  },
  {
    slug: "gramado",
    name: "Gramado",
    location: "Rio Grande do Sul, Brasil",
    image:
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200&q=80",
    description:
      "Charme europeu no sul do Brasil. Fondue, lareira, natureza e o melhor do inverno.",
    priceFrom: 4200,
    duration: "4 dias",
  },
  {
    slug: "toscana",
    name: "Toscana",
    location: "Itália",
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Colinas, vinhedos e vilas medievais. A Itália mais autêntica e saborosa.",
    priceFrom: 12500,
    duration: "10 dias",
  },
] as const;

export const testimonials = [
  {
    name: "Ana Paula M.",
    location: "São Paulo, SP",
    rating: 5,
    text: "A Paula montou a lua de mel dos nossos sonhos. Cada detalhe foi pensado com carinho. Voltamos completamente apaixonados — pelo lugar e pela experiência.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carlos e Renata",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Viajamos em família com três crianças. Tudo impecável — transfers, hotéis, passeios. As crianças ainda falam daquela viagem.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Roberto S.",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Primeira vez usando agente de viagens. A diferença fez toda a diferença. Suporte 24h, ajustes de última hora, zero estresse. Virou minha agente pra vida.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const differentials = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada cliente é ouvido com atenção. Nada de pacotes prontos — cada roteiro é único.",
    icon: "Sparkles",
  },
  {
    title: "Curadoria cuidadosa",
    description:
      "Seleciono pessoalmente cada hotel, transferência e experiência. Só indico o que eu mesma indicaria pra um amigo.",
    icon: "Compass",
  },
  {
    title: "Suporte durante a viagem",
    description:
      "Estou disponível 24/7 durante toda a viagem. Qualquer imprevisto, uma mensagem e a gente resolve.",
    icon: "Headphones",
  },
  {
    title: "Parcerias exclusivas",
    description:
      "Acesso a tarifas e benefícios exclusivos através das minhas parcerias com hotéis e operadores.",
    icon: "Award",
  },
] as const;

export const stats = [
  { value: "12+", label: "Anos de experiência" },
  { value: "40+", label: "Destinos pelo mundo" },
  { value: "500+", label: "Clientes atendidos" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/cotacao", label: "Cotação" },
] as const;

export const tripTypeOptions = [
  { value: "honeymoon", label: "Lua de mel" },
  { value: "family", label: "Em família" },
  { value: "adventure", label: "Aventura" },
  { value: "corporate", label: "Corporativo" },
  { value: "group", label: "Em grupo" },
  { value: "resort", label: "Resort & Praia" },
  { value: "other", label: "Outro" },
] as const;

export const budgetOptions = [
  { value: "ate-5k", label: "Até R$ 5.000" },
  { value: "5k-10k", label: "R$ 5.000 a R$ 10.000" },
  { value: "10k-20k", label: "R$ 10.000 a R$ 20.000" },
  { value: "20k-40k", label: "R$ 20.000 a R$ 40.000" },
  { value: "40k+", label: "Acima de R$ 40.000" },
  { value: "flexivel", label: "Prefiro não informar" },
] as const;

export const travelersOptions = [
  { value: "1", label: "1 pessoa" },
  { value: "2", label: "2 pessoas" },
  { value: "3", label: "3 pessoas" },
  { value: "4", label: "4 pessoas" },
  { value: "5-7", label: "5 a 7 pessoas" },
  { value: "8+", label: "8 ou mais" },
] as const;