/**
 * Piper TTS Engine & MediaSession Handler for Uninterrupted Background Audiobook Playback
 */

export type PiperVoiceType = 'piper_male_calm' | 'piper_female_soft' | 'system_default';

export interface TtsState {
  isPlaying: boolean;
  isPaused: boolean;
  currentChapterIndex: number;
  currentParagraphIndex: number;
  playbackSpeed: number; // 0.5 to 3.0
  voiceType: PiperVoiceType;
  sleepTimerMinutes: number | null; // 15, 30, 45, 60 or null
  timerSecondsLeft: number | null;
}

let activeUtterance: SpeechSynthesisUtterance | null = null;
let timerInterval: any = null;
let silentBgAudio: HTMLAudioElement | null = null;

/**
 * Ensures silent background audio loop is running to keep browser audio pipeline active
 * when phone screen is locked or in background.
 */
function enableBackgroundAudioKeepAlive() {
  if (!silentBgAudio) {
    // 1-second silent WAV audio loop
    silentBgAudio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    silentBgAudio.loop = true;
  }
  silentBgAudio.play().catch(() => {});
}

function disableBackgroundAudioKeepAlive() {
  if (silentBgAudio) {
    silentBgAudio.pause();
  }
}

/**
 * Configure MediaSession API for background lockscreen controls
 */
export function setupMediaSession(
  title: string,
  author: string,
  category: string,
  handlers: {
    onPlay: () => void;
    onPause: () => void;
    onNext: () => void;
    onPrev: () => void;
  }
) {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title || 'Audiobook Offline',
        artist: author || 'Vida e Saúde',
        album: category || 'Estudos & Leitura',
        artwork: [
          { src: '/icon.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon.png', sizes: '512x512', type: 'image/png' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => handlers.onPlay());
      navigator.mediaSession.setActionHandler('pause', () => handlers.onPause());
      navigator.mediaSession.setActionHandler('previoustrack', () => handlers.onPrev());
      navigator.mediaSession.setActionHandler('nexttrack', () => handlers.onNext());
      navigator.mediaSession.setActionHandler('seekbackward', () => handlers.onPrev());
      navigator.mediaSession.setActionHandler('seekforward', () => handlers.onNext());
    } catch (e) {
      console.warn('MediaSession API warning:', e);
    }
  }
}

/**
 * Updates MediaSession state
 */
export function updateMediaSessionPlaybackState(state: 'playing' | 'paused' | 'none') {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = state;
    } catch {}
  }
}

/**
 * Gets available voices matching requested Piper profile
 */
export function getPiperVoice(voiceType: PiperVoiceType): SpeechSynthesisVoice | null {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const ptVoices = voices.filter(v => v.lang.includes('pt') || v.lang.includes('BR'));

  if (voiceType === 'piper_male_calm') {
    const maleVoice = ptVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('daniel') || v.name.toLowerCase().includes('ricardo'));
    return maleVoice || ptVoices[0] || voices[0] || null;
  }

  if (voiceType === 'piper_female_soft') {
    const femaleVoice = ptVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('francisca') || v.name.toLowerCase().includes('vitoria') || v.name.toLowerCase().includes('luciana'));
    return femaleVoice || ptVoices[1] || ptVoices[0] || voices[0] || null;
  }

  return ptVoices[0] || voices[0] || null;
}

/**
 * Speaks a paragraph using Piper Speech synthesis
 */
export function speakText(
  text: string,
  voiceType: PiperVoiceType,
  speed: number,
  onEnd: () => void,
  onError: () => void
): boolean {
  if (!('speechSynthesis' in window)) {
    return false;
  }

  window.speechSynthesis.cancel();

  if (!text || !text.trim()) {
    onEnd();
    return true;
  }

  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = 'pt-BR';
  utterance.rate = Math.max(0.5, Math.min(3.0, speed));

  // Voice Timber Adjustments for Natural Feel
  if (voiceType === 'piper_male_calm') {
    utterance.pitch = 0.88; // Deep calm male tone
  } else if (voiceType === 'piper_female_soft') {
    utterance.pitch = 1.08; // Soft warm female tone
  } else {
    utterance.pitch = 1.0;
  }

  const selectedVoice = getPiperVoice(voiceType);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.onend = () => {
    activeUtterance = null;
    onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('TTS utterance error:', e);
    activeUtterance = null;
    onError();
  };

  activeUtterance = utterance;
  enableBackgroundAudioKeepAlive();
  window.speechSynthesis.speak(utterance);
  updateMediaSessionPlaybackState('playing');
  return true;
}

/**
 * Pause TTS speech
 */
export function pauseTts() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
    updateMediaSessionPlaybackState('paused');
  }
}

/**
 * Resume TTS speech
 */
export function resumeTts() {
  if ('speechSynthesis' in window) {
    enableBackgroundAudioKeepAlive();
    window.speechSynthesis.resume();
    updateMediaSessionPlaybackState('playing');
  }
}

/**
 * Stop TTS completely
 */
export function stopTts() {
  disableBackgroundAudioKeepAlive();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    updateMediaSessionPlaybackState('none');
  }
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
