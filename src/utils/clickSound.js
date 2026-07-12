// Synthesized retro click/blip, generated on the fly with the Web Audio API.
// No audio file to host or load — just a couple lines of oscillator config.

let audioCtx;

function getContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

/**
 * Plays a short, upbeat retro "blip" — meant for nav/footer link clicks.
 * Square wave, quick pitch drop, fast decay so it never feels laggy.
 */
export function playClickSound() {
  try {
    const ctx = getContext();

    // Browsers suspend AudioContext until a user gesture — this call
    // happens inside a click handler, so it's safe to resume here.
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(720, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      420,
      ctx.currentTime + 0.08,
    );

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  } catch (err) {
    // Fails silently — a missing click sound should never break navigation
    console.warn("Click sound unavailable:", err);
  }
}
