// Web Audio API Synthesizer for Vida e Saúde PWA

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play realistic water pour & drop sound effect
 */
export function playWaterSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Bubbling / pouring filter noise
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(1200, now + 0.35);
    filter.Q.value = 8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.4);

    // Drop chime
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.3);

    oscGain.gain.setValueAtTime(0.2, now + 0.1);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now + 0.1);
    osc.stop(now + 0.36);
  } catch (e) {
    console.warn("Audio Context error:", e);
  }
}

/**
 * Play Japamala bead click sound
 */
export function playBeadSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);

    if (navigator.vibrate) {
      navigator.vibrate(25);
    }
  } catch (e) {
    console.warn("Audio Context error:", e);
  }
}

/**
 * Play Cadence Beep for exercise cadence (down, pause, up)
 */
export function playCadenceBeep(type: 'down' | 'hold' | 'up' | 'rest') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    let freq = 440;
    if (type === 'down') freq = 320;
    if (type === 'hold') freq = 520;
    if (type === 'up') freq = 880;
    if (type === 'rest') freq = 220;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  } catch (e) {
    console.warn("Cadence sound error:", e);
  }
}

/**
 * Play Vault metallic unlock sound
 */
export function playVaultUnlockSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Metallic click sequence
    [0, 0.08, 0.16, 0.28].forEach((delay, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 3 ? 'sine' : 'sawtooth';
      osc.frequency.setValueAtTime(400 + idx * 250, now + delay);
      osc.frequency.exponentialRampToValueAtTime(150, now + delay + 0.06);

      gain.gain.setValueAtTime(0.2, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 0.08);
    });
  } catch (e) {
    console.warn("Vault sound error:", e);
  }
}

/**
 * Play Vault metallic lock / latch sound
 */
export function playVaultLockSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Heavy metallic thud and latching click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.23);

    // Latch click
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'sawtooth';
    clickOsc.frequency.setValueAtTime(1200, now + 0.15);
    clickOsc.frequency.exponentialRampToValueAtTime(200, now + 0.25);

    clickGain.gain.setValueAtTime(0.2, now + 0.15);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);

    clickOsc.start(now + 0.15);
    clickOsc.stop(now + 0.27);
  } catch (e) {
    console.warn("Vault lock sound error:", e);
  }
}

/**
 * Play Shield click / pulse impact sound
 */
export function playShieldImpactSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.23);
  } catch (e) {
    console.warn("Shield sound error:", e);
  }
}

/**
 * Ambient Binaural & White Noise Generator
 */
let ambientNodes: { osc1?: OscillatorNode; osc2?: OscillatorNode; gain?: GainNode; noiseGain?: GainNode; noiseSource?: AudioBufferSourceNode } | null = null;

export function toggleAmbientSound(type: 'off' | 'binaural432' | 'rain' | 'waves') {
  const ctx = getAudioContext();

  // Stop previous
  if (ambientNodes) {
    try {
      if (ambientNodes.osc1) ambientNodes.osc1.stop();
      if (ambientNodes.osc2) ambientNodes.osc2.stop();
      if (ambientNodes.noiseSource) ambientNodes.noiseSource.stop();
    } catch (e) {}
    ambientNodes = null;
  }

  if (type === 'off') return;

  const now = ctx.currentTime;

  if (type === 'binaural432') {
    // 432 Hz base + 438 Hz (6 Hz theta wave for deep focus)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const masterGain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(432, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(438, now);

    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.linearRampToValueAtTime(0.08, now + 2);

    osc1.connect(masterGain);
    osc2.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);

    ambientNodes = { osc1, osc2, gain: masterGain };
  } else if (type === 'rain' || type === 'waves') {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = type === 'rain' ? 'lowpass' : 'bandpass';
    filter.frequency.setValueAtTime(type === 'rain' ? 800 : 400, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, now);
    noiseGain.gain.linearRampToValueAtTime(0.06, now + 2);

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noiseSource.start(now);

    ambientNodes = { noiseSource, noiseGain };
  }
}
