import { StudyItem } from '../types';
import { normalizeBook } from '../utils/bookConverter';

export const INITIAL_STUDY_LIBRARY: StudyItem[] = [
  normalizeBook({
    id: 'book1',
    title: 'Meditações',
    author: 'Marco Aurélio',
    category: 'Filosofia Estóica',
    fileFormat: 'BOOK',
    coverGradient: 'from-amber-700 via-amber-800 to-amber-950',
    isFavorite: true,
    content: `LIVRO PRIMEIRO
1. Do meu avô Verus aprendi o bom caráter e a serenidade.
2. Da reputação e da memória de meu pai, a modéstia e a virilidade.
3. De minha mãe, a piedade, a generosidade e a abstinência não só de fazer o mal, mas até de pensar em fazê-lo; e, além disso, a simplicidade no modo de viver, bem distante da ostentação dos ricos.

LIVRO SEGUNDO
Ao amanhecer, dize a ti mesmo previamente: Encontrarei o curioso, o ingrato, o arrogante, o enganador, o invejoso, o insociável. Todos esses males lhes acontecem por ignorância do bem e do mal.
Mas eu, que contemplei a natureza do bem, que é o belo, e a do mal, que é o feio, e a natureza do próprio pecador, que é meu parente — não porque participe do mesmo sangue ou da mesma semente, mas porque participa da mesma mente e da mesma porção divina —, não posso sofrer dano de nenhum deles, pois nenhum deles pode me envolver na fealdade; nem posso me irar com meu parente nem odiá-lo.
Nascemos para a cooperação, como os pés, as mãos, as pálpebras, as fileiras dos dentes superiores e inferiores. Agir como adversários uns dos outros é contra a natureza.`,
    progressPercentage: 25,
    lastReadPosition: 0,
    flashcards: [
      { question: 'Qual a principal lição do Livro II sobre o convívio humano?', answer: 'Reconhecer que os erros alheios vêm da ignorância e que nascemos para cooperar como membros de um só corpo.' },
      { question: 'O que Marco Aurélio aprendeu com sua mãe?', answer: 'Piedade, generosidade, abstinência de maus pensamentos e vida simples longe da ostentação.' }
    ],
    quiz: [
      {
        question: 'Segundo Marco Aurélio, por que as pessoas cometem injustiças ou arrogância?',
        options: ['Por maldade inata imutável', 'Por ignorância sobre o que é verdadeiramente bom e belo', 'Por desejo de riqueza', 'Por destino divino'],
        correctAnswerIndex: 1
      }
    ]
  }),
  normalizeBook({
    id: 'book2',
    title: 'A Arte da Guerra',
    author: 'Sun Tzu',
    category: 'Estratégia & Foco',
    fileFormat: 'EPUB',
    coverGradient: 'from-rose-800 via-red-900 to-stone-950',
    isFavorite: false,
    content: `CAPÍTULO 1 - ESTIMATIVAS
1. A arte da guerra é de vital importância para o Estado. É um domínio de vida ou de morte, um caminho para a sobrevivência ou para a ruína. Portanto, é um imperativo estudá-la minuciosamente.

2. A guerra é baseada no engano e na adaptação. Por conseguinte, quando for capaz de atacar, finge incapacidade; ao utilizar tuas forças, finge inatividade; quando estiveres perto, faz o inimigo crer que estás longe; quando longe, faz com que pareça que estás perto.

3. Se o teu inimigo for seguro em todos os pontos, prepara-te para ele. Se ele estiver em força superior, evita-o. Se teu oponente for temperamental, procura irritá-lo. Se for arrogante, estimula o seu orgulho. Se estiver descansando, não lhe dês sossego.`,
    progressPercentage: 40,
    lastReadPosition: 0,
    flashcards: [
      { question: 'Qual o principle fundamental das estimativas para Sun Tzu?', answer: 'A vitória pertence àquele que calcula detalhadamente os 5 fatores antes do combate.' }
    ],
    quiz: [
      {
        question: 'Segundo Sun Tzu, em que se baseia fundamentalmente a arte estratégica?',
        options: ['Na força bruta', 'Na sorte', 'No engano e na adaptação flexível', 'Na quantidade de soldados'],
        correctAnswerIndex: 2
      }
    ]
  }),
  normalizeBook({
    id: 'book3',
    title: 'Manual de Epicteto (Enchiridion)',
    author: 'Epicteto',
    category: 'Filosofia Prática',
    fileFormat: 'PDF',
    coverGradient: 'from-emerald-800 via-teal-900 to-slate-950',
    isFavorite: true,
    content: `1. Das coisas que existem, algumas estão sob nosso controle, outras não.
Sob nosso controle estão nossas opiniões, nossos impulsos, nossos desejos e nossas aversões — em suma, tudo o que é ação nossa.
Não estão sob nosso controle nosso corpo, nossos bens, nossa reputação e nossos cargos — em suma, tudo o que não é ação nossa.

2. Lembra-te de que as coisas sob nosso controle são por natureza livres, sem impedimentos nem entraves. Já as coisas fora de nosso controle são fracas, escravizadas, sujeitas a impedimentos e alheias.
Se julgares livres as coisas que por natureza são escravas, e tuas as coisas alheias, serás impedido, sofrerás, ficarás perturbado e culparás deuses e homens.`,
    progressPercentage: 60,
    lastReadPosition: 0,
    flashcards: [
      { question: 'O que está verdadeiramente sob nosso controle segundo Epicteto?', answer: 'Nossas opiniões, impulsos, desejos e aversões (nossos julgamentos internos).' }
    ],
    quiz: [
      {
        question: 'Qual a consequência de tentar controlar coisas que não estão sob nosso controle?',
        options: ['Sucesso garantido', 'Perturbação, sofrimento e ressentimento', 'Paz de espírito', 'Riqueza material'],
        correctAnswerIndex: 1
      }
    ]
  })
];
