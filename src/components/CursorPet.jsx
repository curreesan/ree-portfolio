import { useEffect, useRef, useState } from "react";
import "../styles/CursorPet.css";

const FRAME_SIZE = 32;
const SCALE = 2;
const SHEET_COLS = 8;
const SHEET_ROWS = 10;

const IDLE_ROW = 0;
const IDLE_FRAMES = 4;
const WALK_ROW = 4;
const WALK_FRAMES = 8;

const FRAME_DURATION = 120;
const EASE = 0.0025;
const IDLE_DISTANCE_THRESHOLD = 4; // px — close enough to the target counts as "arrived"
const OFFSET_X = 32;
const OFFSET_Y = 32;
const INITIAL_PADDING = 40; // keeps the cat fully inside the viewport on load

function CursorPet() {
  const [supportsCursor] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  const spriteRef = useRef(null);
  const position = useRef({ x: INITIAL_PADDING, y: INITIAL_PADDING });
  const target = useRef({ x: INITIAL_PADDING, y: INITIAL_PADDING });
  const facingLeft = useRef(false);
  const frameIndex = useRef(0);
  const lastFrameTime = useRef(0);
  const isWalking = useRef(true); // starts "walking" toward its resting spot

  useEffect(() => {
    if (!supportsCursor) return;

    function handleMouseMove(e) {
      const targetX = e.clientX + OFFSET_X;
      const targetY = e.clientY + OFFSET_Y;

      const dx = targetX - target.current.x;
      if (Math.abs(dx) > 1) {
        facingLeft.current = dx < 0;
      }
      target.current = { x: targetX, y: targetY };
    }

    window.addEventListener("mousemove", handleMouseMove);

    let rafId;
    function tick(timestamp) {
      position.current.x += (target.current.x - position.current.x) * EASE;
      position.current.y += (target.current.y - position.current.y) * EASE;

      const distance = Math.hypot(
        target.current.x - position.current.x,
        target.current.y - position.current.y,
      );
      // Walking whenever there's real distance left to close — regardless
      // of whether the mouse itself is currently moving. Only idles once
      // it's actually caught up to the resting spot.
      isWalking.current = distance > IDLE_DISTANCE_THRESHOLD;

      if (timestamp - lastFrameTime.current > FRAME_DURATION) {
        const frameCount = isWalking.current ? WALK_FRAMES : IDLE_FRAMES;
        frameIndex.current = (frameIndex.current + 1) % frameCount;
        lastFrameTime.current = timestamp;
      }

      if (spriteRef.current) {
        const row = isWalking.current ? WALK_ROW : IDLE_ROW;
        const bgX = frameIndex.current * FRAME_SIZE * SCALE;
        const bgY = row * FRAME_SIZE * SCALE;

        spriteRef.current.style.left = `${position.current.x}px`;
        spriteRef.current.style.top = `${position.current.y}px`;
        spriteRef.current.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        spriteRef.current.style.transform = `translate(-50%, -50%) scaleX(${
          facingLeft.current ? -1 : 1
        })`;
      }

      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [supportsCursor]);

  if (!supportsCursor) return null;

  return (
    <div
      ref={spriteRef}
      className="cursor-pet"
      style={{
        left: 0,
        top: 0,
        backgroundImage: "url(/sprites/cat.png)",
        backgroundSize: `${SHEET_COLS * FRAME_SIZE * SCALE}px ${SHEET_ROWS * FRAME_SIZE * SCALE}px`,
      }}
    />
  );
}

export default CursorPet;
