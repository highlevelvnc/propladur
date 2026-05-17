export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  shortTitle: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; subtitle: string; image: string };
  intro: string;
  sections: { heading: string; body: string[] }[];
  benefits: string[];
  gallery: string[];
  faqs: ServiceFAQ[];
  related: string[]; // slugs
  whatsappContext: string;
};

export const SERVICES: Service[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pladur-porto",
    shortTitle: "Pladur",
    navTitle: "Montagem de Pladur",
    metaTitle: "Montagem de Pladur no Porto — PRO PLADUR",
    metaDescription:
      "Empresa especializada em montagem de pladur no Porto. Estruturas técnicas, isolamento integrado e acabamentos impecáveis. Peça orçamento sem compromisso.",
    hero: {
      eyebrow: "Pladur no Porto",
      title: "Montagem de Pladur com acabamento profissional",
      subtitle:
        "Estruturas em perfil metálico e placas em pladur com isolamento integrado, executadas por equipa especializada no Porto e arredores.",
      image: "/portfolio/gallery/g003.jpg",
    },
    intro:
      "A PRO PLADUR é uma empresa do Porto especializada em montagem de pladur com todos os acabamentos. Trabalhamos para clientes particulares e empresas que valorizam rigor técnico, prazos cumpridos e paredes verdadeiramente lisas — sem juntas visíveis e sem reparos pós-obra.",
    sections: [
      {
        heading: "Pladur de raiz, do perfil ao remate final",
        body: [
          "A montagem de pladur começa muito antes da placa entrar em obra. Estudamos a estrutura existente, definimos o tipo de perfil metálico adequado (montante, calha, perfil reforçado), integramos isolamento térmico ou acústico onde for necessário e só depois aplicamos as placas de gesso cartonado.",
          "Cada parede ou divisória que executamos é acompanhada da preparação correta da junta — fita, massa, lixagem — até ficar pronta para receber pintura sem qualquer ondulação visível. É este nível de detalhe que separa uma obra bem feita de uma obra apenas terminada.",
        ],
      },
      {
        heading: "Pladur standard, hidrófugo ou ignífugo — usamos o certo",
        body: [
          "Existem várias placas de gesso cartonado, e cada divisão pede a sua. Usamos pladur standard em quartos, salas e zonas secas; pladur hidrófugo (verde) em cozinhas, casas de banho e zonas húmidas; e pladur ignífugo (rosa) onde a regulamentação ou o projeto exigem resistência ao fogo.",
          "Este detalhe é frequentemente ignorado por equipas menos especializadas — e é a principal razão para problemas de humidade ou bolor em obras de pladur mal executadas.",
        ],
      },
    ],
    benefits: [
      "Estruturas metálicas dimensionadas para a carga real",
      "Isolamento térmico e acústico integrado",
      "Juntas invisíveis pré-pintura",
      "Placa correta para cada divisão (standard, hidrófugo, ignífugo)",
      "Obra limpa e protegida do primeiro ao último dia",
    ],
    gallery: [
      "/portfolio/gallery/g003.jpg",
      "/portfolio/p1-real.jpg",
      "/portfolio/gallery/g040.jpg",
      "/portfolio/gallery/g030.jpg",
    ],
    faqs: [
      {
        q: "Quanto tempo demora a montar uma parede em pladur?",
        a: "Depende da dimensão e do tipo de obra. Uma divisória simples num apartamento fica concluída em 1 a 3 dias úteis, incluindo estrutura, placas e tratamento de juntas. Em obras maiores apresentamos um cronograma realista no orçamento.",
      },
      {
        q: "Pladur é mais barato que parede em tijolo?",
        a: "Na maioria das remodelações sim, sobretudo porque é mais rápido de montar, dispensa argamassa, evita sujidade e permite passar instalações por dentro. O custo total da obra reduz mesmo quando o material em si é semelhante.",
      },
      {
        q: "Posso pendurar TV, prateleiras ou móveis numa parede de pladur?",
        a: "Sim. Quando sabemos à partida o que vai ser fixado, reforçamos o interior da parede com madeira tratada ou perfil metálico extra, permitindo suportar TVs, móveis suspensos e armários sem qualquer risco.",
      },
      {
        q: "O pladur isola bem ruído e temperatura?",
        a: "Por si só, uma placa de pladur isola pouco. O isolamento vem do material colocado dentro da estrutura — lã de rocha, lã de vidro ou placas acústicas específicas. Quando bem executado, um pladur com isolamento integrado isola tão bem ou melhor que uma parede tradicional.",
      },
    ],
    related: ["tetos-falsos-porto", "divisorias-porto", "remodelacoes-porto"],
    whatsappContext: "montagem de pladur",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "tetos-falsos-porto",
    shortTitle: "Tetos Falsos",
    navTitle: "Tetos Falsos em Pladur",
    metaTitle: "Tetos Falsos no Porto — Pladur com Sanca e LED",
    metaDescription:
      "Tetos falsos em pladur no Porto: planos, decorativos, com sanca e iluminação LED integrada. Acabamento liso, durável e executado por equipa especializada.",
    hero: {
      eyebrow: "Tetos Falsos no Porto",
      title: "Tetos Falsos em pladur com iluminação integrada",
      subtitle:
        "Planos, rebaixados ou decorativos com sanca e LED embutido. Soluções para habitações, escritórios e estabelecimentos no Porto e arredores.",
      image: "/portfolio/gallery/g050.jpg",
    },
    intro:
      "Os tetos falsos em pladur são a forma mais elegante e versátil de transformar um espaço. Permitem esconder canalizações ou eletricidade, melhorar o isolamento, integrar iluminação LED e elevar instantaneamente o aspeto premium de qualquer divisão. Na PRO PLADUR executamos tetos falsos em todo o Porto com acabamento liso e duradouro.",
    sections: [
      {
        heading: "Plano, rebaixado ou decorativo — escolhemos consigo",
        body: [
          "Cada projeto pede um tipo de teto diferente. O teto plano é a solução mais limpa e atemporal, ideal quando o objetivo é uniformizar o espaço. O teto rebaixado com sanca cria uma moldura visual em redor da divisão e permite integrar uma faixa LED indireta que muda completamente a atmosfera. Os tetos decorativos com molduras, frisos ou volumes diferenciados são adequados para salas, halls e suites onde o teto é parte do design.",
          "Aconselhamos a melhor opção em função do espaço, da altura disponível e do orçamento — sem empurrar a opção mais cara só porque é mais cara.",
        ],
      },
      {
        heading: "Iluminação LED embutida feita à primeira",
        body: [
          "Trabalhamos diretamente com eletricistas de confiança para garantir que a iluminação LED — focos, faixas indiretas ou painéis — fica integrada no teto falso de raiz. Isto evita reparações posteriores, retoques de pintura e tempo perdido a coordenar empresas diferentes.",
          "Cada foco fica nivelado, cada faixa de LED com a temperatura de cor adequada à divisão (quente em quartos e salas, neutro em cozinhas).",
        ],
      },
    ],
    benefits: [
      "Escondem canalizações, AVAC e cabos elétricos",
      "Permitem iluminação LED embutida e sanca indireta",
      "Melhoram isolamento térmico e acústico",
      "Acabamento liso pronto a pintar",
      "Resultado premium sem obras estruturais pesadas",
    ],
    gallery: [
      "/portfolio/gallery/g050.jpg",
      "/portfolio/gallery/g090.jpg",
      "/portfolio/gallery/g013.jpg",
      "/portfolio/gallery/g010.jpg",
    ],
    faqs: [
      {
        q: "Quantos centímetros perde o teto com um teto falso?",
        a: "Tipicamente entre 8 e 15 cm, dependendo das instalações que precisam passar por cima (cabos, focos embutidos, ar condicionado). Em situações específicas conseguimos reduzir essa altura com perfis mais finos.",
      },
      {
        q: "Posso ter teto falso só numa parte da sala?",
        a: "Sim, é uma solução muito popular: o teto plano em parte da divisão e um rebaixamento com sanca LED sobre a zona de estar ou de jantar. Cria diferenciação de zonas sem partir paredes.",
      },
      {
        q: "Quanto tempo demora a montar um teto falso numa sala?",
        a: "Uma sala média (15-25 m²) com teto plano fica concluída em 2 a 4 dias úteis, incluindo estrutura, placas, juntas e remates. Tetos decorativos ou com sanca podem levar 1 a 2 dias adicionais.",
      },
      {
        q: "Os tetos falsos em pladur amarelam com o tempo?",
        a: "Não, desde que sejam pintados com tinta plástica adequada e estejam num espaço sem infiltrações. O pladur em si é estável durante décadas; as descolorações que ouvimos falar são quase sempre causadas por humidades não tratadas.",
      },
    ],
    related: ["pladur-porto", "divisorias-porto", "remodelacoes-porto"],
    whatsappContext: "tetos falsos",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "divisorias-porto",
    shortTitle: "Divisórias",
    navTitle: "Divisórias em Pladur",
    metaTitle: "Divisórias em Pladur no Porto — PRO PLADUR",
    metaDescription:
      "Divisórias em pladur no Porto: rápidas, limpas e com excelente isolamento acústico. Solução ideal para criar ou redistribuir divisões sem obras pesadas.",
    hero: {
      eyebrow: "Divisórias no Porto",
      title: "Divisórias em pladur sem obras pesadas",
      subtitle:
        "Criamos ou redistribuímos divisões em apartamentos, escritórios e estabelecimentos no Porto, com isolamento acústico integrado e disrupção mínima.",
      image: "/portfolio/p3-real.jpg",
    },
    intro:
      "Precisa de dividir um espaço aberto, criar uma nova suite ou um escritório dentro de casa? As divisórias em pladur são a solução mais rápida, limpa e flexível do mercado — em poucos dias o espaço ganha uma nova divisão completa, com isolamento acústico e prontos para pintura.",
    sections: [
      {
        heading: "Mais rápido que tijolo, mais flexível para o futuro",
        body: [
          "Uma divisória em pladur monta-se em 1 a 3 dias úteis, sem argamassa, sem corte de tijolo e com muito menos sujidade. Permite passar canalizações elétricas, água ou som por dentro da parede de forma limpa, e pode ser removida no futuro sem destruir o pavimento ou o teto.",
          "Para quem está a remodelar e ainda pondera o layout final, é a solução mais inteligente: erra-se barato, corrige-se barato.",
        ],
      },
      {
        heading: "Isolamento acústico que se nota mesmo",
        body: [
          "A grande diferença entre uma divisória bem feita e uma divisória apenas montada está no que vai dentro: lã de rocha, lã mineral ou painéis acústicos colocados dentro da estrutura metálica.",
          "Nas divisórias entre quartos ou entre escritório e zona social usamos sistemas reforçados que reduzem significativamente a transmissão de ruído — sem aumentar a espessura da parede.",
        ],
      },
    ],
    benefits: [
      "Execução em 1 a 3 dias úteis por divisória",
      "Isolamento acústico integrado (lã de rocha)",
      "Instalações elétricas e canalização passam por dentro",
      "Reversível: pode ser removida no futuro",
      "Acabamento liso pronto a pintar",
    ],
    gallery: [
      "/portfolio/p3-real.jpg",
      "/portfolio/gallery/g001.jpg",
      "/portfolio/gallery/g040.jpg",
      "/portfolio/gallery/g030.jpg",
    ],
    faqs: [
      {
        q: "Uma divisória em pladur isola mesmo o ruído?",
        a: "Sim, desde que seja executada com isolamento adequado dentro da estrutura (lã de rocha ou similar) e com placas duplas se necessário. Nesses casos isola tão bem ou melhor que uma parede tradicional em tijolo.",
      },
      {
        q: "Posso ter uma porta normal numa divisória em pladur?",
        a: "Sim. Reforçamos a estrutura no local da porta com perfil metálico apropriado e madeira, suportando portas standard, portas de correr ou portas pivotantes sem qualquer compromisso.",
      },
      {
        q: "É preciso pedir licença na câmara para fazer uma divisória?",
        a: "Para divisórias interiores em pladur, geralmente não é necessária licença camarária — são consideradas obras de pequena dimensão. Em prédios sob regime de propriedade horizontal, no entanto, deve consultar o regulamento do condomínio.",
      },
      {
        q: "Quanto custa uma divisória em pladur no Porto?",
        a: "O custo varia em função da dimensão, do tipo de isolamento e dos acabamentos. Após visita ao local enviamos um orçamento detalhado em 24 a 48 horas, com tudo discriminado e sem custos surpresa.",
      },
    ],
    related: ["pladur-porto", "tetos-falsos-porto", "remodelacoes-porto"],
    whatsappContext: "divisórias em pladur",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "pinturas-porto",
    shortTitle: "Pinturas",
    navTitle: "Pinturas Interiores e Exteriores",
    metaTitle: "Pinturas no Porto — Interiores e Exteriores",
    metaDescription:
      "Serviço de pinturas no Porto: interiores, exteriores, preparação completa e acabamento liso e duradouro. Equipa especializada e prazos cumpridos.",
    hero: {
      eyebrow: "Pinturas no Porto",
      title: "Pinturas Interiores e Exteriores com acabamento durável",
      subtitle:
        "Preparação cuidada, primário e duas demãos finais. Acabamento liso, uniforme e que se mantém por anos.",
      image: "/portfolio/gallery/g021.jpg",
    },
    intro:
      "A diferença entre uma boa pintura e uma má pintura não está só na cor final — está em tudo o que acontece antes da primeira demão. Na PRO PLADUR preparamos a parede como deve ser, aplicamos primário adequado e só depois pintamos. O resultado: paredes lisas, uniformes e sem reparos visíveis depois de a obra terminar.",
    sections: [
      {
        heading: "Preparação é 70% do trabalho",
        body: [
          "Antes de pintar, lixamos a superfície, tapamos furos, regularizamos juntas, removemos vestígios de pintura antiga e aplicamos primário selador para que a tinta agarre uniformemente. Esta fase, frequentemente saltada por equipas baratas, é a que distingue uma pintura que dura 10 anos de uma que precisa de retoques no primeiro ano.",
          "Em paredes em pladur recém-instaladas, garantimos que as juntas estão completamente uniformes antes de aplicar a primeira demão.",
        ],
      },
      {
        heading: "Pinturas interiores: do branco minimal ao tom personalizado",
        body: [
          "Trabalhamos com as principais marcas de tintas (Cin, Robbialac, Dyrup) em acabamento mate, acetinado ou cerâmico — escolhido em função da divisão e do uso. Para divisões com mais humidade ou tráfego, recomendamos tintas laváveis com resistência reforçada.",
          "Aconselhamos a paleta em função do espaço e da luz natural, com amostras grandes antes da decisão final — para evitar surpresas.",
        ],
      },
      {
        heading: "Pinturas exteriores: proteção real contra o tempo",
        body: [
          "Em fachadas, varandas e muros usamos tintas de alta resistência ao sol, chuva e poluição. Limpamos a superfície, tratamos fissuras, aplicamos primário fixador e duas demãos finais. O acabamento mantém-se uniforme durante anos sem fissuras ou descamação.",
        ],
      },
    ],
    benefits: [
      "Preparação completa: lixar, regularizar, selar",
      "Primário adequado a cada superfície",
      "Duas demãos finais com tinta de qualidade",
      "Marcas: Cin, Robbialac, Dyrup ou equivalente",
      "Proteção integral do espaço durante a obra",
    ],
    gallery: [
      "/portfolio/gallery/g021.jpg",
      "/portfolio/gallery/g080.jpg",
      "/portfolio/gallery/g090.jpg",
      "/portfolio/gallery/g010.jpg",
    ],
    faqs: [
      {
        q: "Quantas demãos de tinta aplicam numa parede?",
        a: "O padrão é primário + 2 demãos finais. Em mudanças radicais de cor (escuro para claro, por exemplo) podem ser necessárias 3 demãos finais para garantir cobertura uniforme — sem custo adicional.",
      },
      {
        q: "Pintam um T2 em quanto tempo?",
        a: "Um apartamento T2 com paredes em bom estado, totalmente repintado (paredes e tetos), demora tipicamente 4 a 6 dias úteis. Inclui preparação, primário, 2 demãos finais e remates.",
      },
      {
        q: "Posso ficar a viver em casa durante a pintura?",
        a: "Sim, na maioria dos casos. Trabalhamos divisão a divisão, protegendo mobiliário e pavimentos. Usamos tintas de baixo odor sempre que possível. Em apartamentos pequenos é mais confortável estar fora durante 2-3 dias críticos.",
      },
      {
        q: "Quanto custa pintar uma casa no Porto?",
        a: "Depende da área a pintar, do estado das paredes (necessita ou não de regularização) e do tipo de tinta. Após visita técnica enviamos orçamento detalhado em 24 a 48 horas, sem qualquer compromisso.",
      },
    ],
    related: ["pladur-porto", "remodelacoes-porto", "tetos-falsos-porto"],
    whatsappContext: "pinturas",
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "remodelacoes-porto",
    shortTitle: "Remodelações",
    navTitle: "Remodelações e Renovações",
    metaTitle: "Remodelações no Porto — Chave-na-Mão | PRO PLADUR",
    metaDescription:
      "Remodelações chave-na-mão no Porto: pladur, tetos falsos, divisórias, pinturas e acabamentos finais coordenados por uma única equipa. Orçamento sem compromisso.",
    hero: {
      eyebrow: "Remodelações no Porto",
      title: "Remodelações chave-na-mão coordenadas por uma só equipa",
      subtitle:
        "Pladur, tetos falsos, divisórias, pinturas e acabamentos finais — tudo executado por nós, com um único responsável pela sua obra.",
      image: "/portfolio/gallery/g050.jpg",
    },
    intro:
      "Uma remodelação envolve dezenas de pequenas decisões e várias especialidades a coordenar. Na PRO PLADUR assumimos a obra do princípio ao fim: estrutura, pladur, tetos, pinturas e remates finais. O cliente fala com uma única pessoa, recebe um orçamento integrado e tem a tranquilidade de que ninguém vai apontar o dedo a outra equipa quando algo correr menos bem.",
    sections: [
      {
        heading: "Renovações parciais ou totais — adaptamos ao seu objetivo",
        body: [
          "Trabalhamos tanto em renovações pontuais (uma sala, uma suite, uma cozinha) como em remodelações integrais de apartamentos, moradias, escritórios e estabelecimentos comerciais. A abordagem é a mesma: visita técnica, proposta detalhada, calendarização realista e execução com a nossa equipa própria.",
          "Para clientes que estão a comprar imóvel para arrendar ou para revender, conseguimos prazos curtos e um padrão de acabamento que valoriza visualmente o imóvel com investimento controlado.",
        ],
      },
      {
        heading: "Um único responsável, comunicação diária",
        body: [
          "Em obras de várias semanas, comunicar mal custa tempo e dinheiro. Na PRO PLADUR o cliente tem sempre um interlocutor único que acompanha a obra, envia fotos do progresso e sinaliza decisões a tomar em tempo útil. Sem reuniões intermináveis, sem trocas de e-mail perdidas.",
          "No fim, a obra é revista consigo divisão a divisão e só fecha quando confirma que o acabamento está irrepreensível.",
        ],
      },
    ],
    benefits: [
      "Uma só equipa para toda a obra (sem subcontratações)",
      "Orçamento integrado e discriminado",
      "Cronograma realista — cumprido até ao último dia",
      "Comunicação diária com um interlocutor único",
      "Revisão final ao detalhe antes do fecho",
    ],
    gallery: [
      "/portfolio/gallery/g050.jpg",
      "/portfolio/gallery/g021.jpg",
      "/portfolio/gallery/g010.jpg",
      "/portfolio/gallery/g013.jpg",
      "/portfolio/gallery/g060.jpg",
      "/portfolio/gallery/g020.jpg",
    ],
    faqs: [
      {
        q: "Trabalham em moradias, apartamentos e espaços comerciais?",
        a: "Sim. Executamos remodelações integrais ou parciais em moradias, apartamentos, escritórios, restaurantes e estabelecimentos comerciais no Porto e arredores.",
      },
      {
        q: "Quanto tempo demora a remodelação de um apartamento?",
        a: "Depende muito do âmbito. Uma remodelação integral de um T2 (pladur, tetos falsos, pinturas, acabamentos) ronda 4 a 8 semanas. Após visita técnica apresentamos cronograma detalhado.",
      },
      {
        q: "Coordenam eletricistas e canalizadores ou trato eu disso?",
        a: "Coordenamos. Trabalhamos com profissionais de confiança de longa data — o cliente fala apenas connosco. Isto evita atrasos típicos de obras onde várias empresas se cruzam no terreno.",
      },
      {
        q: "Como funciona o pagamento numa remodelação?",
        a: "Pagamento faseado, definido no orçamento: sinal à confirmação, parcela intermédia conforme avanço e remanescente apenas no fecho da obra após revisão final. Tudo discriminado por escrito, sem surpresas.",
      },
    ],
    related: ["pladur-porto", "pinturas-porto", "tetos-falsos-porto"],
    whatsappContext: "remodelação",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function whatsappForService(s: Service) {
  const text = `Olá, gostaria de pedir um orçamento para ${s.whatsappContext} no Porto.`;
  return `https://wa.me/351912735043?text=${encodeURIComponent(text)}`;
}
