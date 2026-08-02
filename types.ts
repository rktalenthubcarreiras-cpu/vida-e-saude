export type NavTab = 
  | 'home' 
  | 'routine' 
  | 'training' 
  | 'water' 
  | 'japamala' 
  | 'faith' 
  | 'timer' 
  | 'study' 
  | 'progress' 
  | 'vault' 
  | 'anticomplaint';

export type DayNightMode = 'day' | 'night' | 'auto';

export type MonthlyFocusType = 
  | 'espanhol' 
  | 'cavaquinho' 
  | 'canto' 
  | 'ukulele' 
  | 'violao';

export interface MonthlyFocusConfig {
  id: MonthlyFocusType;
  title: string;
  subtitle: string;
  iconName: string;
  targetMinutesPerDay: number;
  description: string;
  curriculum: string[];
}

export interface DailyHabit {
  id: string;
  title: string;
  category: 'morning' | 'afternoon' | 'evening';
  completed: boolean;
  timeSlot?: string;
  isMonthlyFocus?: boolean;
}

export interface QuoteItem {
  id: string;
  text: string;
  author: string;
  category: 'Filosofia' | 'Teologia' | 'Bíblia' | 'Desenvolvimento Humano';
  context?: string;
}

export interface Exercise {
  id: string;
  name: string;
  targetMuscles: string;
  equipment: string;
  sets: number;
  reps: string;
  cadence: string; // e.g., "3-1-2"
  description: string;
  videoUrl?: string;
  biomechanicsType: 'pushup' | 'elevated_pushup' | 'bench_press' | 'fly' | 'french_press' | 'kickback' | 'plank' | 'leg_raise' | 'bent_row' | 'single_row' | 'pulldown' | 'curl' | 'hammer_curl' | 'concentrated_curl' | 'squat' | 'sumo_squat' | 'lunge' | 'stiff' | 'glute_bridge' | 'calf_raise' | 'overhead_press' | 'lateral_raise' | 'front_raise' | 'reverse_fly' | 'face_pull' | 'bicycle_crunch' | 'hollow_hold' | 'burpee' | 'jumping_jacks';
}

export interface WorkoutProgram {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  subtitle: string;
  muscles: string;
  exercises: Exercise[];
}

export interface WorkoutLog {
  id: string;
  programId: 'A' | 'B' | 'C' | 'D' | 'E';
  date: string; // ISO string
  durationMinutes: number;
  completedExercises: string[];
  notes?: string;
}

export interface MedalMonth {
  monthIndex: number; // 0 = Jan, 11 = Dec
  monthName: string;
  title: string;
  description: string;
  iconName: string;
  targetDays: number;
  unlocked: boolean;
}

export interface VaultGoal {
  id: string;
  category: 'saude' | 'fe' | 'cognicao' | 'financas' | 'relacionamentos';
  title: string;
  description: string;
  targetDate: string;
  progressPercentage: number;
  decrees: string[];
}

export interface AntiComplaintLog {
  id: string;
  date: string;
  complaint: string;
  solution1: string;
  solution2: string;
  gratitudeReframe: string;
}

export interface BookChapter {
  id: string;
  title: string;
  content: string;
  paragraphs: string[];
  pageCount: number;
}

export interface BookHighlight {
  id: string;
  chapterIndex: number;
  paragraphIndex: number;
  text: string;
  color: 'yellow' | 'green' | 'blue' | 'pink';
  note?: string;
  date: string;
}

export interface BookBookmark {
  id: string;
  chapterIndex: number;
  pageIndex: number;
  paragraphIndex: number;
  label: string;
  date: string;
}

export interface BookNote {
  id: string;
  text: string;
  chapterIndex: number;
  date: string;
}

export interface BookReadingStats {
  totalTimeSeconds: number;
  pagesReadToday: number;
  streakDays: number;
  avgWpm: number;
  lastReadParagraphIndex?: number;
}

export interface StudyItem {
  id: string;
  title: string;
  author: string;
  category: string;
  content: string; // Combined plain text
  coverUrl?: string;
  coverGradient?: string;
  fileFormat?: 'PDF' | 'EPUB' | 'MOBI' | 'AZW3' | 'FB2' | 'DOCX' | 'TXT' | 'HTML' | 'MD' | 'RTF' | 'BOOK';
  chapters?: BookChapter[];
  metadata?: {
    dateAdded: string;
    lastOpened: string;
    totalPages: number;
    estimatedReadMinutes: number;
    fileSizeBytes?: number;
    isScannedPdfWithOcr?: boolean;
    extractedImagesCount?: number;
    extractedTablesCount?: number;
  };
  progressPercentage: number;
  currentChapterIndex?: number;
  currentPageIndex?: number;
  lastReadPosition: number;
  isFavorite?: boolean;
  bookmarks?: BookBookmark[];
  highlights?: BookHighlight[];
  notes?: BookNote[];
  readingStats?: BookReadingStats;
  flashcards: { question: string; answer: string; learned?: boolean }[];
  quiz: { question: string; options: string[]; correctAnswerIndex: number }[];
}

export interface BioimpedanceLog {
  id: string;
  date: string;
  weightKg: number;
  heightCm: number;
  sex: 'male' | 'female';
  age: number;
  waistCm: number;
  neckCm: number;
  bodyFatPercentage: number;
  leanMassKg: number;
  bmi: number;
  bmr: number;
  recommendedProgram: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface StudySessionLog {
  id: string;
  subjectName: string;
  timeSpentMinutes: number;
  mediaType: 'Book' | 'Video' | 'PDF' | 'Audio';
  date: string;
  pagesOrChapters: string;
  notes?: string;
}

export interface SpacedRepetitionTopic {
  id: string;
  title: string;
  category: string;
  initialDate: string;
  nextReview24h: string;
  nextReview7d: string;
  nextReview30d: string;
  completed24h: boolean;
  completed7d: boolean;
  completed30d: boolean;
}

export interface UserState {
  dayNightMode: DayNightMode;
  waterGoalMl: number;
  waterCurrentMl: number;
  waterHistory: { date: string; amountMl: number }[];
  currentMonthlyFocus: MonthlyFocusType;
  monthlyFocusMinutesLogged: Record<string, number>; // date string -> minutes
  habits: DailyHabit[];
  lastHabitDate: string;
  habitStreak: number;
  japamalaCount: number;
  japamalaTotalRuns: number;
  activeMantra: string;
  customUserMantra: string;
  antiComplaintStreak: number; // days without complaint
  antiComplaintLogs: AntiComplaintLog[];
  vaultPin: string; // default "1234"
  vaultGoals: VaultGoal[];
  vaultNotes: { id: string; title: string; text: string; date: string }[];
  workoutLogs: WorkoutLog[];
  bioimpedanceHistory: BioimpedanceLog[];
  unlockedMedals: number[]; // array of monthIndex (0..11)
  grandMedalsUnlocked: string[]; // e.g. ["2026_SEMESTER_2", "2027_SEMESTER_1"]
  studyItems: StudyItem[];
  studySessions: StudySessionLog[];
  spacedRepetitions: SpacedRepetitionTopic[];
  customWorkoutVideos: Record<string, string>; // exerciseId -> videoUrl
  warmupVideoUrl?: string; // dedicated MP4 video for pre/post-workout warmup & cooldown
}
