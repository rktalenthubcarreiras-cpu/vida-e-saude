import { QuoteItem } from '../types';

export const QUOTES_DATABASE: QuoteItem[] = [
  {
    id: 'q1',
    author: 'Emmanuel Kant',
    text: 'Duas coisas me enchem o ânimo de admiração e respeito sempre novos e crescentes: o céu estrelado acima de mim e a lei moral dentro de mim.',
    category: 'Filosofia',
    context: 'Crítica da Razão Prática'
  },
  {
    id: 'q2',
    author: 'Santo Tomás de Aquino',
    text: 'A fé não destrói a razão, mas a aperfeiçoa e eleva.',
    category: 'Teologia',
    context: 'Suma Teológica'
  },
  {
    id: 'q3',
    author: 'Santo Agostinho',
    text: 'Fizeste-nos para ti, Senhor, e o nosso coração permanece inquieto enquanto não repousar em ti.',
    category: 'Teologia',
    context: 'Confissões'
  },
  {
    id: 'q4',
    author: 'Aristóteles',
    text: 'Nós somos o que fazemos repetidamente. A excelência, portanto, não é um ato, mas um hábito.',
    category: 'Filosofia',
    context: 'Ética a Nicômaco'
  },
  {
    id: 'q5',
    author: 'Jesus Cristo',
    text: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim. E disse mais: Conhecereis a verdade, e a verdade vos libertará.',
    category: 'Bíblia',
    context: 'João 14:6 & João 8:32'
  },
  {
    id: 'q6',
    author: 'A Bíblia Sagrada',
    text: 'Tudo posso naquele que me fortalece. O Senhor é meu pastor, nada me faltará.',
    category: 'Bíblia',
    context: 'Filipenses 4:13 & Salmo 23'
  },
  {
    id: 'q7',
    author: 'Augusto Cury',
    text: 'Vencer a si mesmo é a maior das vitórias. Construa pontes sobre os seus conflitos interiores e governe a sua mente com sabedoria.',
    category: 'Desenvolvimento Humano',
    context: 'Ansiedade & O Mestre da Inesquecível Gestão da Mente'
  },
  {
    id: 'q8',
    author: 'Mario Sergio Cortella',
    text: 'Faça o teu melhor, na condição que você tem, enquanto você não tem condições melhores para fazer melhor ainda!',
    category: 'Desenvolvimento Humano',
    context: 'Qual é a Tua Obra?'
  },
  {
    id: 'q9',
    author: 'Leandro Karnal',
    text: 'A virtude não exige aplausos ou testemunhas. O caráter é aquilo que você faz quando não há ninguém olhando.',
    category: 'Filosofia',
    context: 'Pequenas Opções Vividas com Foco'
  },
  {
    id: 'q10',
    author: 'Marco Aurélio',
    text: 'Sua vida é o que seus pensamentos a transformam. Concentre sua energia no presente e cumpra seu dever com serena firmeza.',
    category: 'Filosofia',
    context: 'Meditações'
  },
  {
    id: 'q11',
    author: 'Sêneca',
    text: 'Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas se tornam difíceis.',
    category: 'Filosofia',
    context: 'Cartas de um Estóico'
  },
  {
    id: 'q12',
    author: 'Epicteto',
    text: 'A felicidade não consiste em ter o que você deseja, mas sim em valorizar e dominar o que você tem sob seu controle.',
    category: 'Filosofia',
    context: 'Enchiridion / Manual da Vida'
  }
];

export function getRandomQuote(): QuoteItem {
  const index = Math.floor(Math.random() * QUOTES_DATABASE.length);
  return QUOTES_DATABASE[index];
}
