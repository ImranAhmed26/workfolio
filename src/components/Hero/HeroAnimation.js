import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`;

const TiltScene = styled.div`
  width: 380px;
  height: 380px;
  transform-style: preserve-3d;
  cursor: pointer;
`;

const FloatingScene = styled.div`
  width: 100%;
  height: 100%;
  animation: ${float} 7s ease-in-out infinite;
`;

// Wobble sequence: each entry is { x (rotateX), y (rotateY), s (scale) }
const WOBBLE_STEPS = [
  { x: -16, y: 20,  s: 1.07 },
  { x: 12,  y: -16, s: 0.95 },
  { x: -9,  y: 12,  s: 1.04 },
  { x: 6,   y: -8,  s: 0.98 },
  { x: -3,  y: 4,   s: 1.01 },
  { x: 0,   y: 0,   s: 1.00 },
];
const WOBBLE_STEP_MS = 100; // time between each step

const HeroAnimation = () => {
  const [tilt,     setTilt]     = useState({ x: 0, y: 0, s: 1 });
  const [hovering, setHovering] = useState(false);
  const [wobbling, setWobbling] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (wobbling) return;
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -8,
      y: ((e.clientX - cx) / (rect.width  / 2)) * 8,
      s: 1,
    });
  };

  const handleMouseEnter = () => { if (!wobbling) setHovering(true); };
  const handleMouseLeave = () => {
    if (wobbling) return;
    setHovering(false);
    setTilt({ x: 0, y: 0, s: 1 });
  };

  const handleClick = () => {
    if (wobbling) return;
    setWobbling(true);
    setHovering(false);

    WOBBLE_STEPS.forEach((step, i) => {
      setTimeout(() => {
        setTilt({ x: step.x, y: step.y, s: step.s });
        if (i === WOBBLE_STEPS.length - 1) {
          // Small delay after settling before re-enabling hover
          setTimeout(() => setWobbling(false), 80);
        }
      }, i * WOBBLE_STEP_MS);
    });
  };

  const transition = wobbling
    ? `transform ${WOBBLE_STEP_MS}ms cubic-bezier(0.36, 0.07, 0.19, 0.97)` // snappy/springy
    : hovering
      ? 'transform 0.08s ease-out'
      : 'transform 0.55s ease';

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TiltScene
        onClick={handleClick}
        style={{
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.s})`,
          transition,
        }}
      >
        <FloatingScene>
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="pGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="cGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.14" />
                <stop offset="55%"  stopColor="#22d3ee" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="250" cy="250" r="230" fill="url(#bgGlow)" />

            <path id="orb1" d="M 170,250 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0" />
            <path id="orb2" d="M 110,250 a 140,140 0 1,0 280,0 a 140,140 0 1,0 -280,0" />
            <path id="orb3" d="M 50,250 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0" />

            <circle cx="250" cy="250" r="80"  stroke="#6366f1" strokeOpacity="0.18" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="140" stroke="#6366f1" strokeOpacity="0.12" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="200" stroke="#22d3ee" strokeOpacity="0.08" strokeWidth="1" fill="none" />

            <circle cx="250" cy="250" r="14" fill="#6366f1" filter="url(#cGlow)">
              <animate attributeName="r"       values="12;17;12"    dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="250" r="22" fill="none" stroke="#6366f1" strokeWidth="1.5">
              <animate attributeName="r"             values="20;34;20"    dur="3s" repeatCount="indefinite" />
              <animate attributeName="strokeOpacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Ring 1 */}
            <circle r="6" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="8s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>
            <circle r="4.5" fill="#6366f1" opacity="0.45">
              <animateMotion dur="8s" begin="-0.28s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.18">
              <animateMotion dur="8s" begin="-0.56s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>

            {/* Ring 2 – particle A */}
            <circle r="5.5" fill="#22d3ee" filter="url(#pGlow)">
              <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="4" fill="#22d3ee" opacity="0.45">
              <animateMotion dur="14s" begin="-0.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="2.5" fill="#22d3ee" opacity="0.18">
              <animateMotion dur="14s" begin="-0.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>

            {/* Ring 2 – particle B */}
            <circle r="4.5" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="14s" begin="-7s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.45">
              <animateMotion dur="14s" begin="-7.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="2" fill="#6366f1" opacity="0.18">
              <animateMotion dur="14s" begin="-7.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>

            {/* Ring 3 – particle A */}
            <circle r="5" fill="#22d3ee" filter="url(#pGlow)">
              <animateMotion dur="22s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="3.5" fill="#22d3ee" opacity="0.45">
              <animateMotion dur="22s" begin="-0.45s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="2.5" fill="#22d3ee" opacity="0.18">
              <animateMotion dur="22s" begin="-0.9s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>

            {/* Ring 3 – particle B */}
            <circle r="4" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="22s" begin="-7.33s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.45">
              <animateMotion dur="22s" begin="-7.78s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>

            {/* Ring 3 – particle C */}
            <circle r="4" fill="#22d3ee" filter="url(#pGlow)">
              <animateMotion dur="22s" begin="-14.67s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="2.5" fill="#22d3ee" opacity="0.45">
              <animateMotion dur="22s" begin="-15.12s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
          </svg>
        </FloatingScene>
      </TiltScene>
    </Wrapper>
  );
};

export default HeroAnimation;
