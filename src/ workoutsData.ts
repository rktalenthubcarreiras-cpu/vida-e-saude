import { WorkoutProgram } from '../types';

export const WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: 'A',
    title: 'Treino A - Peito, Tríceps & Abdômen',
    subtitle: 'Hipertrofia Superior Anterior',
    muscles: 'Peitoral Maior, Tríceps Braquial, Reto Abdominal',
    exercises: [
      {
        id: 'a1',
        name: 'Flexão Tradicional',
        targetMuscles: 'Peitoral Maior, Deltóide Anterior, Tríceps',
        equipment: 'Colchonete / Peso Corporal',
        sets: 4,
        reps: '10 - 20 reps',
        cadence: '3-1-2',
        description: 'Mantenha o core contraído, desça em 3 segundos até o peito quase tocar o chão, segure 1 segundo e suba de forma explosiva.',
        biomechanicsType: 'pushup',
        videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4'
      },
      {
        id: 'a2',
        name: 'Flexão Pés Elevados',
        targetMuscles: 'Peitoral Superior (Porção Clavicular)',
        equipment: 'Cadeira/Banco + Colchonete',
        sets: 3,
        reps: '8 - 15 reps',
        cadence: '3-1-2',
        description: 'Apoie os pés em um banco ou cadeira elevada para direcionar a carga na porção superior do peitoral.',
        biomechanicsType: 'elevated_pushup',
        videoUrl: 'https://www.youtube.com/embed/Z0bRiVhnO8Q'
      },
      {
        id: 'a3',
        name: 'Supino no Chão h/Halteres',
        targetMuscles: 'Peitoral Central e Tríceps',
        equipment: 'Halteres + Colchonete',
        sets: 4,
        reps: '15 - 20 reps',
        cadence: '3-1-2',
        description: 'Deitado no chão, empurre os halteres verticalmente acima do peito mantendo tensão constante no peitoral.',
        biomechanicsType: 'bench_press',
        videoUrl: 'https://www.youtube.com/embed/uUGDRwge4F8'
      },
      {
        id: 'a4',
        name: 'Crucifixo no Chão',
        targetMuscles: 'Peitoral Isolado (Alongamento)',
        equipment: 'Halteres + Colchonete',
        sets: 3,
        reps: '15 - 20 reps',
        cadence: '3-1-2',
        description: 'Abra os braços em arco controlado, sentindo o alongamento do peitoral, sem encostar cotovelos no chão bruscamente.',
        biomechanicsType: 'fly',
        videoUrl: 'https://www.youtube.com/embed/eozdVDA78K0'
      },
      {
        id: 'a5',
        name: 'Tríceps Francês',
        targetMuscles: 'Tríceps (Cabeça Longa)',
        equipment: 'Halter Único ou Duplo',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Segure o halter acima da cabeça com os braços estendidos e flexione os cotovelos para trás com total controle.',
        biomechanicsType: 'french_press',
        videoUrl: 'https://www.youtube.com/embed/_gsUck-7M74'
      },
      {
        id: 'a6',
        name: 'Tríceps Coice',
        targetMuscles: 'Tríceps (Pico de Contração)',
        equipment: 'Halteres',
        sets: 3,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Tronco inclinado à frente, cotovelo colado ao corpo. Estenda o braço para trás contraindo o tríceps por 1 segundo.',
        biomechanicsType: 'kickback',
        videoUrl: 'https://www.youtube.com/embed/6SS6K3l-wj8'
      },
      {
        id: 'a7',
        name: 'Prancha',
        targetMuscles: 'Core, Reto Abdominal, Transverso',
        equipment: 'Colchonete',
        sets: 3,
        reps: '60s (1 minuto)',
        cadence: 'Isometria',
        description: 'Antebraços no chão, corpo alinhado e abdômen fortemente contraído mantendo a estabilidade do tronco.',
        biomechanicsType: 'plank',
        videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw'
      },
      {
        id: 'a8',
        name: 'Elevação de Pernas',
        targetMuscles: 'Abdômen Infra (Inferior)',
        equipment: 'Colchonete',
        sets: 3,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Deitado de costas, eleve as pernas estendidas até 90° e desça lentamente sem tocar o calcanhar no solo.',
        biomechanicsType: 'leg_raise',
        videoUrl: 'https://www.youtube.com/embed/JB2oyawG9KI'
      }
    ]
  },
  {
    id: 'B',
    title: 'Treino B - Costas & Bíceps',
    subtitle: 'Hipertrofia Superior Posterior',
    muscles: 'Latíssimo do Dorso, Trapézio, Rombóides, Bíceps Braquial',
    exercises: [
      {
        id: 'b1',
        name: 'Remada Curvada',
        targetMuscles: 'Dorsal, Trapézio e Rombóides',
        equipment: 'Par de Halteres',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Incline o quadril mantendo a coluna neutra. Puxe os halteres em direção ao quadril espremendo as escápulas.',
        biomechanicsType: 'bent_row',
        videoUrl: 'https://www.youtube.com/embed/6gvmc49_G5A'
      },
      {
        id: 'b2',
        name: 'Remada Unilateral',
        targetMuscles: 'Dorsal e Latíssimo em isolamento',
        equipment: 'Halter + Apoio Banco/Cadeira',
        sets: 4,
        reps: '15 reps por lado',
        cadence: '3-1-2',
        description: 'Apoie joelho e mão no banco. Puxe o halter na linha da cintura focando na contração dorsal unilateral.',
        biomechanicsType: 'single_row',
        videoUrl: 'https://www.youtube.com/embed/pYcpY20QaE8'
      },
      {
        id: 'b3',
        name: 'Pulldown c/ Elástico',
        targetMuscles: 'Abertura de Costas e Trapézio',
        equipment: 'Banda Elástica / Fita',
        sets: 4,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Puxe a banda elástica acima da cabeça em direção ao peitoral superior abrindo as cotovelos para fora.',
        biomechanicsType: 'pulldown',
        videoUrl: 'https://www.youtube.com/embed/CAwf7n6Luuc'
      },
      {
        id: 'b4',
        name: 'Rosca Direta',
        targetMuscles: 'Bíceps Braquial',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Cotovelos fixos ao lado do tronco, flexione os braços com palmas para cima sem balançar a coluna.',
        biomechanicsType: 'curl',
        videoUrl: 'https://www.youtube.com/embed/sA_6CipL3-U'
      },
      {
        id: 'b5',
        name: 'Rosca Martelo',
        targetMuscles: 'Braquial e Antebraço',
        equipment: 'Halteres',
        sets: 3,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Mantenha a pegada neutra (palmas viradas para dentro) e suba o peso focando na espessura do braço.',
        biomechanicsType: 'hammer_curl',
        videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4'
      },
      {
        id: 'b6',
        name: 'Rosca Concentrada',
        targetMuscles: 'Bíceps (Pico de Contração)',
        equipment: 'Halter + Cadeira',
        sets: 3,
        reps: '12 reps por lado',
        cadence: '3-1-2',
        description: 'Sentado, apoie o cotovelo no joelho interno e flexione o braço isolando totalmente o bíceps.',
        biomechanicsType: 'concentrated_curl',
        videoUrl: 'https://www.youtube.com/embed/0AUGkch3tzc'
      }
    ]
  },
  {
    id: 'C',
    title: 'Treino C - Pernas, Glúteos & Panturrilhas',
    subtitle: 'Hipertrofia Membros Inferiores',
    muscles: 'Quadríceps, Isquiotibiais, Glúteo Máximo, Panturrilhas',
    exercises: [
      {
        id: 'c1',
        name: 'Agachamento',
        targetMuscles: 'Quadríceps e Glúteos',
        equipment: 'Halteres / Peso Corporal',
        sets: 5,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Pés na largura dos ombros, flexione os joelhos projetando o quadril para trás com o peito aberto.',
        biomechanicsType: 'squat',
        videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U'
      },
      {
        id: 'c2',
        name: 'Agachamento Sumô',
        targetMuscles: 'Adutores da Coxa e Glúteos',
        equipment: 'Halter Único',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Pés abertos com pontas viradas a 45°. Agache fundo mantendo joelhos alinhados com a ponta dos pés.',
        biomechanicsType: 'sumo_squat',
        videoUrl: 'https://www.youtube.com/embed/9ZuD8I6m698'
      },
      {
        id: 'c3',
        name: 'Afundo',
        targetMuscles: 'Quadríceps e Glúteo Unilateral',
        equipment: 'Halteres / Peso Corporal',
        sets: 4,
        reps: '12 reps cada perna',
        cadence: '3-1-2',
        description: 'Passo largo à frente, desça o joelho traseiro rente ao chão mantendo o tronco ereto e estável.',
        biomechanicsType: 'lunge',
        videoUrl: 'https://www.youtube.com/embed/D7KaRcUTQeE'
      },
      {
        id: 'c4',
        name: 'Romeno / Stiff',
        targetMuscles: 'Posterior de Coxa e Glúteos',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Joelhos levemente semidobrados, empurre o quadril para trás descendo os halteres rente às pernas.',
        biomechanicsType: 'stiff',
        videoUrl: 'https://www.youtube.com/embed/1uDiW5--rAE'
      },
      {
        id: 'c5',
        name: 'Ponte de Glúteo',
        targetMuscles: 'Glúteo Máximo',
        equipment: 'Colchonete + Halter',
        sets: 4,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Deitado de costas, eleve o quadril até alinhar coxa e tronco, contraindo os glúteos fortemente no topo.',
        biomechanicsType: 'glute_bridge',
        videoUrl: 'https://www.youtube.com/embed/wPM8icPu6H8'
      },
      {
        id: 'c6',
        name: 'Panturrilha em Pé',
        targetMuscles: 'Gastrocnêmio e Sóleo',
        equipment: 'Degrau / Anilhas',
        sets: 5,
        reps: '25 reps',
        cadence: '3-1-2',
        description: 'Apoie as pontas dos pés no degrau, desça o calcanhar ao máximo para alongar e suba na ponta máxima.',
        biomechanicsType: 'calf_raise',
        videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI'
      }
    ]
  },
  {
    id: 'D',
    title: 'Treino D - Ombros & Abdômen',
    subtitle: 'Escultura de Deltóides & Cintura Escapular',
    muscles: 'Deltóide Anterior, Lateral, Posterior & Abdômen Completo',
    exercises: [
      {
        id: 'd1',
        name: 'Desenvolvimento Militar',
        targetMuscles: 'Deltóide Anterior e Lateral',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Empurre os halteres para cima acima da cabeça até quase estender os cotovelos com controle.',
        biomechanicsType: 'overhead_press',
        videoUrl: 'https://www.youtube.com/embed/B-aVuyhvLHU'
      },
      {
        id: 'd2',
        name: 'Elevação Lateral',
        targetMuscles: 'Deltóide Lateral',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Eleve os halteres pelas laterais até a altura dos ombros mantendo cotovelos levemente flexionados.',
        biomechanicsType: 'lateral_raise',
        videoUrl: 'https://www.youtube.com/embed/3VcKaXpzqRo'
      },
      {
        id: 'd3',
        name: 'Elevação Frontal',
        targetMuscles: 'Deltóide Anterior',
        equipment: 'Halteres',
        sets: 3,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Eleve o halter à frente do corpo até a linha dos olhos mantendo a musculatura tensa na descida.',
        biomechanicsType: 'front_raise',
        videoUrl: 'https://www.youtube.com/embed/-t7fuZ0KhDA'
      },
      {
        id: 'd4',
        name: 'Crucifixo Inverso',
        targetMuscles: 'Deltóide Posterior e Rombóides',
        equipment: 'Halteres',
        sets: 3,
        reps: '15 reps',
        cadence: '3-1-2',
        description: 'Tronco inclinado para frente, abra os braços para fora espremendo as escápulas e a parte traseira do ombro.',
        biomechanicsType: 'reverse_fly',
        videoUrl: 'https://www.youtube.com/embed/ttvfGg9d06c'
      },
      {
        id: 'd5',
        name: 'Face Pull c/ Elástico',
        targetMuscles: 'Manguito Rotador e Deltóide Posterior',
        equipment: 'Banda Elástica',
        sets: 4,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Puxe o elástico em direção ao rosto separando as mãos e focando na rotação externa dos ombros.',
        biomechanicsType: 'face_pull',
        videoUrl: 'https://www.youtube.com/embed/rep-qVOkqgk'
      },
      {
        id: 'd6',
        name: 'Abdominal Bicicleta',
        targetMuscles: 'Oblíquos e Reto Abdominal',
        equipment: 'Colchonete',
        sets: 3,
        reps: '20 reps',
        cadence: '3-1-2',
        description: 'Deitado de costas, alterne cotovelos de encontro aos joelhos opostos no ar.',
        biomechanicsType: 'bicycle_crunch',
        videoUrl: 'https://www.youtube.com/embed/9FGilxCbd78'
      },
      {
        id: 'd7',
        name: 'Hollow Hold',
        targetMuscles: 'Core Profundo e Transverso',
        equipment: 'Colchonete',
        sets: 3,
        reps: '30s',
        cadence: 'Isometria',
        description: 'Posição de canoa no chão, mantendo a lombar totalmente encostada no solo e abdômen travado.',
        biomechanicsType: 'hollow_hold',
        videoUrl: 'https://www.youtube.com/embed/LlDNeffvGDA'
      }
    ]
  },
  {
    id: 'E',
    title: 'Treino E - Circuito Full Body (4 Voltas / Laps)',
    subtitle: 'Circuito Metabólico de Alta Intensidade • 4 Laps',
    muscles: 'Corpo Inteiro (Peito, Costas, Pernas, Ombros, Braços e Core)',
    exercises: [
      {
        id: 'e1',
        name: 'Flexão',
        targetMuscles: 'Peitoral, Tríceps e Core',
        equipment: 'Colchonete / Peso Corporal',
        sets: 4,
        reps: '15 reps por volta',
        cadence: 'Fluído',
        description: 'Primeiro exercício do circuito. Faça 15 flexões ritmadas mantendo a postura.',
        biomechanicsType: 'pushup',
        videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4'
      },
      {
        id: 'e2',
        name: 'Agachamento',
        targetMuscles: 'Quadríceps e Glúteos',
        equipment: 'Peso Corporal / Halteres',
        sets: 4,
        reps: '20 reps por volta',
        cadence: 'Fluído',
        description: 'Segundo exercício do circuito. Agache continuamente 20 vezes sem pausar no topo.',
        biomechanicsType: 'squat',
        videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U'
      },
      {
        id: 'e3',
        name: 'Remada',
        targetMuscles: 'Dorsal e Trapézio',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps por volta',
        cadence: 'Fluído',
        description: 'Terceiro exercício do circuito. Incline o tronco e puxe os halteres contraindo a dorsal.',
        biomechanicsType: 'bent_row',
        videoUrl: 'https://www.youtube.com/embed/6gvmc49_G5A'
      },
      {
        id: 'e4',
        name: 'Desenvolvimento Militar',
        targetMuscles: 'Ombros e Deltóides',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps por volta',
        cadence: 'Fluído',
        description: 'Quarto exercício do circuito. Empurre os halteres acima da cabeça com firmeza.',
        biomechanicsType: 'overhead_press',
        videoUrl: 'https://www.youtube.com/embed/B-aVuyhvLHU'
      },
      {
        id: 'e5',
        name: 'Afundo',
        targetMuscles: 'Pernas e Glúteos',
        equipment: 'Peso Corporal / Halteres',
        sets: 4,
        reps: '12 reps cada perna por volta',
        cadence: 'Fluído',
        description: 'Quinto exercício do circuito. Dê o passo alternado mantendo o equilíbrio no tronco.',
        biomechanicsType: 'lunge',
        videoUrl: 'https://www.youtube.com/embed/D7KaRcUTQeE'
      },
      {
        id: 'e6',
        name: 'Rosca Direta',
        targetMuscles: 'Bíceps',
        equipment: 'Halteres',
        sets: 4,
        reps: '15 reps por volta',
        cadence: 'Fluído',
        description: 'Sexto exercício do circuito. Flexione os bíceps com controle sem impulso corporal.',
        biomechanicsType: 'curl',
        videoUrl: 'https://www.youtube.com/embed/sA_6CipL3-U'
      },
      {
        id: 'e7',
        name: 'Tríceps Francês',
        targetMuscles: 'Tríceps',
        equipment: 'Halter',
        sets: 4,
        reps: '15 reps por volta',
        cadence: 'Fluído',
        description: 'Sétimo exercício do circuito. Estenda os braços acima da cabeça contraindo o tríceps.',
        biomechanicsType: 'french_press',
        videoUrl: 'https://www.youtube.com/embed/_gsUck-7M74'
      },
      {
        id: 'e8',
        name: 'Ponte de Glúteo',
        targetMuscles: 'Glúteos e Posterior',
        equipment: 'Colchonete',
        sets: 4,
        reps: '20 reps por volta',
        cadence: 'Fluído',
        description: 'Oitavo exercício do circuito. Eleve o quadril no solo espremendo os glúteos no topo.',
        biomechanicsType: 'glute_bridge',
        videoUrl: 'https://www.youtube.com/embed/wPM8icPu6H8'
      },
      {
        id: 'e9',
        name: 'Abdominal Bicicleta',
        targetMuscles: 'Core e Oblíquos',
        equipment: 'Colchonete',
        sets: 4,
        reps: '20 reps por volta',
        cadence: 'Fluído',
        description: 'Nono exercício do circuito. Movimento contínuo de bicicleta no solo com rotação de tronco.',
        biomechanicsType: 'bicycle_crunch',
        videoUrl: 'https://www.youtube.com/embed/9FGilxCbd78'
      },
      {
        id: 'e10',
        name: 'Prancha',
        targetMuscles: 'Core Isométrico',
        equipment: 'Colchonete',
        sets: 4,
        reps: '60s por volta (Descanso 2min após)',
        cadence: 'Isometria',
        description: 'Décimo exercício. Sustente a prancha por 60s. Ao terminar, descanse 2 minutos antes de iniciar a próxima volta (4 voltas no total).',
        biomechanicsType: 'plank',
        videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw'
      }
    ]
  }
];
