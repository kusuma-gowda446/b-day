// Synthesized web-audio sound effects & dreamy music box background music
// Zero external dependencies, 100% reliable in modern browsers!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.step = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle bell / chime tone
  playChime(freq = 523.25, duration = 0.8) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration * 0.1);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  }

  // Play candle blowout breath / whoosh effect
  playBlowOut() {
    try {
      this.init();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.6;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(400, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.5);
      filter.Q.value = 1.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.55);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch (e) {
      console.warn("Blow sound error:", e);
    }
  }

  // Play gentle pop sound
  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {
      console.warn(e);
    }
  }

  // Play dreamy celebration harp arpeggio
  playCelebrationHarp() {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 1.2);
      }, idx * 90);
    });
  }

  // Dreamy Music-Box Melody Generator (Happy Birthday / Lofi theme notes)
  // Notes in Hz for a gentle celesta/music-box tune
  startLofiMusic(onStateChange) {
    this.init();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;
    if (onStateChange) onStateChange(true);

    // Sweet, soft music box melody: Happy Birthday variation in C major
    // C4, C4, D4, C4, F4, E4 | C4, C4, D4, C4, G4, F4 | C4, C4, C5, A4, F4, E4, D4 | Bb4, Bb4, A4, F4, G4, F4
    const melody = [
      { f: 261.63, d: 0.35, pause: 400 },
      { f: 261.63, d: 0.35, pause: 400 },
      { f: 293.66, d: 0.7, pause: 700 },
      { f: 261.63, d: 0.7, pause: 700 },
      { f: 349.23, d: 0.7, pause: 700 },
      { f: 329.63, d: 1.2, pause: 1200 },

      { f: 261.63, d: 0.35, pause: 400 },
      { f: 261.63, d: 0.35, pause: 400 },
      { f: 293.66, d: 0.7, pause: 700 },
      { f: 261.63, d: 0.7, pause: 700 },
      { f: 392.00, d: 0.7, pause: 700 },
      { f: 349.23, d: 1.2, pause: 1200 },

      { f: 261.63, d: 0.35, pause: 400 },
      { f: 261.63, d: 0.35, pause: 400 },
      { f: 523.25, d: 0.7, pause: 700 },
      { f: 440.00, d: 0.7, pause: 700 },
      { f: 349.23, d: 0.7, pause: 700 },
      { f: 329.63, d: 0.7, pause: 700 },
      { f: 293.66, d: 1.1, pause: 1100 },

      { f: 466.16, d: 0.35, pause: 400 },
      { f: 466.16, d: 0.35, pause: 400 },
      { f: 440.00, d: 0.7, pause: 700 },
      { f: 349.23, d: 0.7, pause: 700 },
      { f: 392.00, d: 0.7, pause: 700 },
      { f: 349.23, d: 1.5, pause: 1600 },
      { f: 0, d: 0.1, pause: 1000 } // interlude pause
    ];

    let noteIndex = 0;
    const playNextNote = () => {
      if (!this.isPlayingMusic) return;

      const item = melody[noteIndex];
      if (item.f > 0) {
        this.playMusicBoxNote(item.f, item.d);
        // Play warm soft bass drone on certain beats
        if (noteIndex === 0 || noteIndex === 6 || noteIndex === 12 || noteIndex === 19) {
          this.playBassDrone(item.f * 0.5);
        }
      }

      noteIndex = (noteIndex + 1) % melody.length;
      this.musicTimer = setTimeout(playNextNote, item.pause);
    };

    playNextNote();
  }

  playMusicBoxNote(freq, duration) {
    try {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 2, this.ctx.currentTime); // 1 octave higher for music-box sparkle

      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(freq * 4, this.ctx.currentTime); // subtle bell overtone

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.4);

      osc.connect(gain);
      oscHarmonic.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + duration + 0.4);
      oscHarmonic.stop(now + duration + 0.4);
    } catch (e) {
      console.warn(e);
    }
  }

  playBassDrone(freq) {
    try {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      // ignore
    }
  }

  stopMusic(onStateChange) {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
    if (onStateChange) onStateChange(false);
  }

  toggleMusic(onStateChange) {
    if (this.isPlayingMusic) {
      this.stopMusic(onStateChange);
    } else {
      this.startLofiMusic(onStateChange);
    }
  }
}

export const sound = new SoundEngine();
