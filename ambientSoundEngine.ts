// Ambient Nature Sound Player using Web Audio API Synthesizers
// 100% Offline, lightweight, realistic soundscapes

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let currentTrackId: string | null = null;
let activeNodes: {
  sources?: (AudioNode | AudioBufferSourceNode | OscillatorNode)[];
  intervals?: number[];
  gainNode?: GainNode;
} = {};

function getContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function getMasterGain(): GainNode {
  const ctx = getContext();
  if (!masterGain) {
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.5; // Default 50% volume
    masterGain.connect(ctx.destination);
  }
  return masterGain;
}

export function setAmbientVolume(volume: number) { // volume 0.0 to 1.0
  const mg = getMasterGain();
  const clamped = Math.max(0, Math.min(1, volume));
  mg.gain.setTargetAtTime(clamped, getContext().currentTime, 0.05);
}

export function stopAmbientSound() {
  if (activeNodes.sources) {
    activeNodes.sources.forEach(src => {
      try {
        if ('stop' in src && typeof src.stop === 'function') {
          src.stop();
        }
        src.disconnect();
      } catch (e) {}
    });
  }
  if (activeNodes.intervals) {
    activeNodes.intervals.forEach(id => clearInterval(id));
  }
  activeNodes = {};
  currentTrackId = null;
}

export type AmbientTrackId = 'rain' | 'waves' | 'forest' | 'fireplace' | 'freq528' | 'off';

export function playAmbientSound(trackId: AmbientTrackId) {
  stopAmbientSound();
  if (trackId === 'off') return;

  const ctx = getContext();
  const mg = getMasterGain();
  const now = ctx.currentTime;
  currentTrackId = trackId;

  const sources: (AudioNode | AudioBufferSourceNode | OscillatorNode)[] = [];
  const intervals: number[] = [];

  if (trackId === 'rain') {
    // Soft Rain (pinkish lowpass noise) + Periodic Distant Thunder
    const bufferSize = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Gain
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, now);

    const rainGain = ctx.createGain();
    rainGain.gain.setValueAtTime(0.25, now);

    noise.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(mg);
    noise.start(now);
    sources.push(noise, filter, rainGain);

    // Periodic Thunder rumble generator
    const triggerThunder = () => {
      if (currentTrackId !== 'rain') return;
      const tNow = ctx.currentTime;
      const tOsc = ctx.createOscillator();
      const tGain = ctx.createGain();
      const tFilter = ctx.createBiquadFilter();

      tOsc.type = 'sawtooth';
      tOsc.frequency.setValueAtTime(60, tNow);
      tOsc.frequency.exponentialRampToValueAtTime(25, tNow + 2.5);

      tFilter.type = 'lowpass';
      tFilter.frequency.setValueAtTime(120, tNow);

      tGain.gain.setValueAtTime(0.01, tNow);
      tGain.gain.linearRampToValueAtTime(0.35, tNow + 0.4);
      tGain.gain.exponentialRampToValueAtTime(0.001, tNow + 3.0);

      tOsc.connect(tFilter);
      tFilter.connect(tGain);
      tGain.connect(mg);

      tOsc.start(tNow);
      tOsc.stop(tNow + 3.1);
    };

    // Trigger thunder every 12 seconds
    const intervalId = window.setInterval(triggerThunder, 12000);
    intervals.push(intervalId);

  } else if (trackId === 'waves') {
    // Ocean Waves / Deep Sea (LFO sweeping bandpass noise)
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(1.2, now);

    // LFO for wave modulation
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, now); // ~8 sec wave swell cycle

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(350, now); // Modulate filter frequency between 200Hz and 900Hz

    lfo.connect(filter.frequency);
    filter.frequency.setValueAtTime(550, now);

    const wavesGain = ctx.createGain();
    wavesGain.gain.setValueAtTime(0.3, now);

    noise.connect(filter);
    filter.connect(wavesGain);
    wavesGain.connect(mg);

    noise.start(now);
    lfo.start(now);
    sources.push(noise, filter, lfo, lfoGain, wavesGain);

  } else if (trackId === 'forest') {
    // Sacred Forest & Birds (soft wind noise + bird chirps)
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const wind = ctx.createBufferSource();
    wind.buffer = buffer;
    wind.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.setValueAtTime(450, now);

    const windGain = ctx.createGain();
    windGain.gain.setValueAtTime(0.15, now);

    wind.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(mg);
    wind.start(now);
    sources.push(wind, windFilter, windGain);

    // Random Bird Chirps
    const triggerBird = () => {
      if (currentTrackId !== 'forest') return;
      const bNow = ctx.currentTime;
      const chirp = ctx.createOscillator();
      const cGain = ctx.createGain();

      chirp.type = 'sine';
      const baseFreq = 2200 + Math.random() * 800;
      chirp.frequency.setValueAtTime(baseFreq, bNow);
      chirp.frequency.exponentialRampToValueAtTime(baseFreq + 600, bNow + 0.08);
      chirp.frequency.exponentialRampToValueAtTime(baseFreq - 200, bNow + 0.16);

      cGain.gain.setValueAtTime(0.08, bNow);
      cGain.gain.exponentialRampToValueAtTime(0.001, bNow + 0.18);

      chirp.connect(cGain);
      cGain.connect(mg);

      chirp.start(bNow);
      chirp.stop(bNow + 0.2);
    };

    const intervalId = window.setInterval(() => {
      if (Math.random() > 0.4) triggerBird();
    }, 2800);
    intervals.push(intervalId);

  } else if (trackId === 'fireplace') {
    // Cozy Fireplace (low rumble + crackle impulses)
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const rumble = ctx.createBufferSource();
    rumble.buffer = buffer;
    rumble.loop = true;

    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.setValueAtTime(280, now);

    const rumbleGain = ctx.createGain();
    rumbleGain.gain.setValueAtTime(0.2, now);

    rumble.connect(rumbleFilter);
    rumbleFilter.connect(rumbleGain);
    rumbleGain.connect(mg);
    rumble.start(now);
    sources.push(rumble, rumbleFilter, rumbleGain);

    // Crackle pops
    const triggerCrackle = () => {
      if (currentTrackId !== 'fireplace') return;
      const pNow = ctx.currentTime;
      const popBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
      const popData = popBuffer.getChannelData(0);
      for (let i = 0; i < popData.length; i++) {
        popData[i] = (Math.random() * 2 - 1) * Math.exp(-i / 100);
      }

      const popSrc = ctx.createBufferSource();
      popSrc.buffer = popBuffer;

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.12 + Math.random() * 0.1, pNow);

      popSrc.connect(popGain);
      popGain.connect(mg);
      popSrc.start(pNow);
    };

    const intervalId = window.setInterval(() => {
      triggerCrackle();
      if (Math.random() > 0.5) setTimeout(triggerCrackle, 50);
    }, 180);
    intervals.push(intervalId);

  } else if (trackId === 'freq528') {
    // 528 Hz Solfeggio Miracle / Transformation Frequency + 534 Hz harmonic theta
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(528, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(534, now); // 6 Hz theta binaural beat

    gain1.gain.setValueAtTime(0.01, now);
    gain1.gain.linearRampToValueAtTime(0.18, now + 1.5);

    osc1.connect(gain1);
    osc2.connect(gain1);
    gain1.connect(mg);

    osc1.start(now);
    osc2.start(now);
    sources.push(osc1, osc2, gain1);
  }

  activeNodes = { sources, intervals };
}

export function getCurrentTrackId(): AmbientTrackId {
  return (currentTrackId as AmbientTrackId) || 'off';
}
