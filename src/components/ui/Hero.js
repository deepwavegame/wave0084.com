import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';

const CHOIR_COUNT = 72;

// The dead choir: stateful generator that wanders between four moods —
// breath (low murmur), prayer (mid drone with occasional spikes),
// scream (violent flare), and silence (a held breath, near-dead).
// Heights are produced by a moving Perlin-ish 1D noise plus per-bar jitter.
function useChoirVoices(count) {
  const [heights, setHeights] = useState(() => new Array(count).fill(4));
  const [mood, setMood] = useState('breath');
  const stateRef = useRef({
    phase: Math.random() * 1000,
    bias: 8,
    targetBias: 10,
    spikeAt: -1,
    spikeIntensity: 0,
    moodUntil: 0,
    seeds: Array.from({ length: count }, () => Math.random() * 6.28),
  });

  useEffect(() => {
    let last = performance.now();
    const STEP_MS = 80; // ~12fps — choppy on purpose, like a possessed VHS

    const pickMood = (now) => {
      const r = Math.random();
      let next, dur;
      if (r < 0.06)       { next = 'scream';  dur = 280 + Math.random() * 520; }
      else if (r < 0.22)  { next = 'silence'; dur = 800 + Math.random() * 1600; }
      else if (r < 0.55)  { next = 'prayer';  dur = 1400 + Math.random() * 2400; }
      else                { next = 'breath';  dur = 1600 + Math.random() * 3000; }
      stateRef.current.moodUntil = now + dur;
      setMood(next);
      return next;
    };

    const tick = () => {
      const now = performance.now();
      const dt = Math.min(0.5, (now - last) / 1000);
      last = now;
      const s = stateRef.current;

      if (now > s.moodUntil) pickMood(now);

      s.phase += dt * (mood === 'scream' ? 9 : mood === 'silence' ? 0.6 : mood === 'prayer' ? 2.4 : 1.4);

      // base bias drifts toward a mood target
      const targets = { breath: 10, prayer: 22, scream: 70, silence: 3 };
      s.targetBias = targets[mood] ?? 10;
      s.bias += (s.targetBias - s.bias) * Math.min(1, dt * 6);

      // random spike — a single voice cries out
      if (s.spikeAt < 0) {
        const spawnP = mood === 'scream' ? 0.6 : mood === 'prayer' ? 0.06 : mood === 'silence' ? 0.005 : 0.02;
        if (Math.random() < spawnP) {
          s.spikeAt = Math.floor(Math.random() * count);
          s.spikeIntensity = (mood === 'scream' ? 85 : 55) + Math.random() * 25;
        }
      }

      const next = new Array(count);
      for (let i = 0; i < count; i++) {
        const seed = s.seeds[i];
        // 1D pseudo-noise from layered sines
        const n =
          Math.sin(s.phase * 0.9 + seed * 1.3) * 0.55 +
          Math.sin(s.phase * 2.1 + seed * 2.7 + i * 0.11) * 0.30 +
          Math.sin(s.phase * 4.3 + seed * 0.7) * 0.15;
        let h = s.bias + n * (mood === 'scream' ? 25 : mood === 'silence' ? 1 : 14);

        // per-bar random jitter (sudden flickers)
        if (Math.random() < (mood === 'scream' ? 0.15 : 0.04)) {
          h += Math.random() * 22 - 6;
        }

        // spike cluster — a 3-7 wide neighbourhood explodes
        if (s.spikeAt >= 0) {
          const d = Math.abs(i - s.spikeAt);
          if (d <= 4) h += s.spikeIntensity * Math.exp(-d * d / 4);
        }

        next[i] = Math.max(2, Math.min(100, h));
      }

      // decay the spike
      if (s.spikeAt >= 0) {
        s.spikeIntensity *= 0.78;
        if (s.spikeIntensity < 4) s.spikeAt = -1;
      }

      setHeights(next);
    };
    const id = setInterval(tick, STEP_MS);
    return () => clearInterval(id);
  }, [count, mood]);

  return { heights, mood };
}

// Ritual readout — vigil counter ticks slowly; decay drifts; choir count breathes.
function useVigil() {
  const [t, setT] = useState({ vigil: 1843, decay: 0.74, choir: 8, sigil: 'XIII' });
  useEffect(() => {
    const SIGILS = ['XIII', 'VII', 'XXII', 'III', 'IX', 'XVII', 'XXX'];
    const id = setInterval(() => {
      setT((prev) => ({
        vigil: prev.vigil + 1,
        decay: Math.min(0.99, prev.decay + (Math.random() * 0.002 - 0.0005)),
        choir: 6 + Math.floor(Math.random() * 5),
        sigil: Math.random() < 0.18 ? SIGILS[Math.floor(Math.random() * SIGILS.length)] : prev.sigil,
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Hero({
  title,
  subtitle,
  kicker,
  backgroundImage,
  actions,
  minHeight = '94vh',
  glitch = true,
  align = 'center',
  children,
}) {
  const t = useVigil();
  const { heights: choirHeights, mood: choirMood } = useChoirVoices(CHOIR_COUNT);
  const [relic, setRelic] = useState(false);

  // A relic flares to life from time to time.
  useEffect(() => {
    let timeout;
    const cycle = () => {
      setRelic(true);
      timeout = setTimeout(() => {
        setRelic(false);
        timeout = setTimeout(cycle, 5500 + Math.random() * 6500);
      }, 2800);
    };
    timeout = setTimeout(cycle, 4200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={clsx(styles.hero, styles[`align-${align}`])}
      style={{
        minHeight,
        backgroundImage: backgroundImage
          ? `linear-gradient(180deg, rgba(5,4,4,0.82), rgba(5,4,4,0.96)), url(${backgroundImage})`
          : undefined,
      }}
    >
      {/* Sacred altar — painted halo & sigil sitting in the gloom */}
      <div className={styles.altar} aria-hidden="true">
        <span className={styles.smear} />
        <span className={styles.bleed1 + ' ' + styles.bleed} />
        <span className={styles.bleed2 + ' ' + styles.bleed} />
        <span className={styles.bleed3 + ' ' + styles.bleed} />
        <span className={styles.bleed4 + ' ' + styles.bleed} />
        <span className={styles.halo} />
        <span className={styles.haloInner} />
        <span className={styles.runes} />
        <span className={styles.sigil} />
      </div>

      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={clsx('container', styles.content)}>
        {kicker && (
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span>{kicker}</span>
            <span className={styles.cursor}>_</span>
          </div>
        )}

        {title && (
          <h1
            className={clsx(styles.title, glitch && styles.glitch)}
            data-text={typeof title === 'string' ? title : ''}
          >
            {title}
          </h1>
        )}

        {/* Choir bar — the breath of dead voices. No two ticks alike. */}
        <div
          className={clsx(
            styles.choir,
            choirMood === 'silence' && styles.choirSilence,
            choirMood === 'scream' && styles.choirScream,
          )}
          aria-hidden="true"
        >
          {choirHeights.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>

        {subtitle && (
          <p className={styles.subtitle}>
            <span className={styles.decodeTag}>INSCRIBED //</span> {subtitle}
          </p>
        )}

        {actions && <div className={styles.actions}>{actions}</div>}
        {children}
      </div>

      {/* HUD plates — ritual ledger */}
      <div className={clsx(styles.hud, styles.hudTL)}>
        <span className={styles.hudKey}>VIGIL N&deg;</span>
        <span className={styles.hudVal}>{String(t.vigil).padStart(5, '0')}</span>
      </div>
      <div className={clsx(styles.hud, styles.hudTR)}>
        <span className={styles.hudKey}>SIGIL</span>
        <span className={styles.hudVal}><em>{t.sigil}</em></span>
      </div>
      <div className={clsx(styles.hud, styles.hudBL)}>
        <span className={styles.hudKey}>CHOIR&nbsp;VOICES</span>
        <span className={styles.hudVal}>{String(t.choir).padStart(2, '0')} <em>&Dagger;</em></span>
      </div>
      <div className={clsx(styles.hud, styles.hudBR)}>
        <span className={styles.hudKey}>DECAY</span>
        <span className={styles.hudVal}><em>{(t.decay * 100).toFixed(1)}%</em></span>
      </div>

      <div className={clsx(styles.contactAlert, relic && styles.contactAlertOn)} aria-hidden="true">
        &#10013; RELIC AWAKE &mdash; SIGIL {t.sigil}
      </div>
    </header>
  );
}
