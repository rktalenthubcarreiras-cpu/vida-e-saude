export interface RosaryMystery {
  name: string;
  days: string;
  mysteries: { title: string; fruit: string; reflection: string }[];
}

export const ROSARY_MYSTERIES: Record<string, RosaryMystery> = {
  gozosos: {
    name: 'Mistérios Gozosos',
    days: 'Segundas-feiras e Sábados',
    mysteries: [
      { title: '1º Anunciação do Anjo Gabriel a Maria', fruit: 'Humildade', reflection: 'Contemplamos a alegria do SIM de Maria que trouxe a Salvação ao mundo.' },
      { title: '2º Visitação de Maria a sua prima Santa Isabel', fruit: 'Caridade Fraterna', reflection: 'Maria parte apressadamente para servir e levar a bênção de Deus.' },
      { title: '3º Nascimento de Jesus em Belém', fruit: 'Desapego e Pobreza de Espírito', reflection: 'O Rei do Universo nasce na simplicidade do presépio.' },
      { title: '4º Apresentação do Menino Jesus no Templo', fruit: 'Obediência e Pureza', reflection: 'Simeão louva a Deus ao contemplar a Luz das Nações.' },
      { title: '5º Perda e Encontro do Menino Jesus no Templo', fruit: 'Busca Constante de Deus', reflection: 'Jesus ensina entre os doutores da Lei com sabedoria divina.' }
    ]
  },
  dolorosos: {
    name: 'Mistérios Dolorosos',
    days: 'Terças e Sextas-feiras',
    mysteries: [
      { title: '1º Agonia de Jesus no Horto das Oliveiras', fruit: 'Contrição dos Pecados', reflection: 'Jesus ora com suor de sangue aceitando a vontade do Pai.' },
      { title: '2º Flagelação de Nosso Senhor Jesus Cristo', fruit: 'Mortificação dos Sentidos', reflection: 'Pelas suas chagas fomos curados e libertados.' },
      { title: '3º Coroação de Espinhos de Jesus', fruit: 'Morte do Orgulho', reflection: 'A caridade suprema suporta as zombarias por amor a nós.' },
      { title: '4º Jesus carrega a Cruz a caminho do Calvário', fruit: 'Paciência nas Tribulações', reflection: 'Carregar a nossa cruz diária no seguimento de Cristo.' },
      { title: '5º Crucificação e Morte de Jesus na Cruz', fruit: 'Salvação e Perdão', reflection: 'Pai, em tuas mãos entrego o meu espírito.' }
    ]
  },
  gloriosos: {
    name: 'Mistérios Gloriosos',
    days: 'Quartas-feiras e Domingos',
    mysteries: [
      { title: '1º Ressurreição de Nosso Senhor Jesus Cristo', fruit: 'Fé Inabalável', reflection: 'Vitoria sobre a morte! A esperança é vitoriosa para sempre.' },
      { title: '2º Ascensão de Jesus ao Céu', fruit: 'Esperança da Vida Eterna', reflection: 'Jesus sobe ao Céu e nos prepara uma morada eterna.' },
      { title: '3º Vinda do Espírito Santo sobre Nossa Senhora e os Apóstolos', fruit: 'Amor de Deus e Dotes do Espírito Santo', reflection: 'A Igreja renasce com fogo, coragem e sabedoria.' },
      { title: '4º Assunção de Nossa Senhora ao Céu', fruit: 'Graça de uma Boa Morte', reflection: 'Maria é elevada em corpo e alma à glória celestial.' },
      { title: '5º Coroação de Maria como Rainha do Céu e da Terra', fruit: 'Perseverança Final', reflection: 'A Rainha da Paz intercede perpetuamente por nós.' }
    ]
  },
  luminosos: {
    name: 'Mistérios Luminosos',
    days: 'Quintas-feiras',
    mysteries: [
      { title: '1º Batismo de Jesus no Rio Jordão', fruit: 'Abertura à Graça Batismal', reflection: 'Este é meu Filho amado, em quem pus todo o meu agrado.' },
      { title: '2º Auto-revelação nas Bodas de Caná', fruit: 'Confiança em Maria', reflection: 'Fazei tudo o que Ele vos disser.' },
      { title: '3º Anúncio do Reino de Deus e Convite à Conversão', fruit: 'Conversão de Coração', reflection: 'O Reino de Deus está próximo; convertei-vos e crede no Evangelho.' },
      { title: '4º Transfiguração de Jesus no Monte Tabor', fruit: 'Desejo de Santidade', reflection: 'A glória divina resplandece na oração contemplativa.' },
      { title: '5º Instituição da Sagrada Eucaristia', fruit: 'Devoto Amor ao Santíssimo Sacramento', reflection: 'Isto é o meu corpo dado por vós. Fazei isto em memória de mim.' }
    ]
  }
};

export const DAILY_LITURGY_SAMPLE = {
  date: 'Liturgia de Hoje',
  firstReading: 'Malaquias 3, 1-4: Eis que eu envio o meu mensageiro, para purificar e renovar os corações.',
  psalm: 'Salmo 23 (24): O Senhor é o rei da glória! Quem subirá ao monte do Senhor? O homem de mãos puras e coração limpo.',
  gospel: 'Lucas 2, 22-40: Meus olhos viram a tua salvação, que preparaste à vista de todos os povos: luz para iluminar as nações.',
  saintOfDay: 'Santo do Dia: São Gabriel, São Miguel e São Rafael Arcanjos - Protetores e Mensageiros da Graça'
};

export const ABUNDANCE_STATEMENTS = [
  'Eu sou um ímã vivo para a prosperidade, riqueza divina e saúde perfeita.',
  'Minha mente está sintonizada na frequência da abundância ilimitada do Criador.',
  'O dinheiro e os recursos chegam até mim de forma ética, honrada e em fluxo contínuo.',
  'Abençoo meu trabalho, minhas finanças e o futuro da minha família com gratidão profunda.',
  'Eu honro a saúde do meu corpo como templo sagrado do Espírito Santo.'
];

export const HOOPONOPONO_STATEMENTS = [
  'Sinto muito.',
  'Me perdoe.',
  'Eu te amo.',
  'Sou grato.'
];
