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
  cursor: none;

  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`;

/* Handles the interactive tilt — separate from the float so they don't conflict */
const TiltScene = styled.div`
  width: 380px;
  height: 380px;
  transform-style: preserve-3d;
`;

/* Handles the continuous float — pure CSS, no JS */
const FloatingScene = styled.div`
  width: 100%;
  height: 100%;
  animation: ${float} 7s ease-in-out infinite;
`;

const HeroAnimation = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // ±8 degree tilt range
    const x = ((e.clientY - cy) / (rect.height / 2)) * -8;
    const y = ((e.clientX - cx) / (rect.width / 2)) * 8;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => {
    setHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TiltScene
        style={{
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovering ? 'transform 0.08s ease-out' : 'transform 0.55s ease',
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

            {/* Ambient background glow */}
            <circle cx="250" cy="250" r="230" fill="url(#bgGlow)" />

            {/* Invisible orbital paths for animateMotion */}
            <path id="orb1" d="M 170,250 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0" />
            <path id="orb2" d="M 110,250 a 140,140 0 1,0 280,0 a 140,140 0 1,0 -280,0" />
            <path id="orb3" d="M 50,250 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0" />

            {/* Visible orbital rings */}
            <circle cx="250" cy="250" r="80"  stroke="#6366f1" strokeOpacity="0.18" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="140" stroke="#6366f1" strokeOpacity="0.12" strokeWidth="1" fill="none" />
            <circle cx="250" cy="250" r="200" stroke="#22d3ee" strokeOpacity="0.08" strokeWidth="1" fill="none" />

            {/* Center pulsing orb */}
            <circle cx="250" cy="250" r="14" fill="#6366f1" filter="url(#cGlow)">
              <animate attributeName="r"       values="12;17;12"     dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;1;0.85"  dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Expanding pulse ring */}
            <circle cx="250" cy="250" r="22" fill="none" stroke="#6366f1" strokeWidth="1.5">
              <animate attributeName="r"             values="20;34;20"    dur="3s" repeatCount="indefinite" />
              <animate attributeName="strokeOpacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* ── Ring 1 (r=80) — indigo, 8 s ── */}
            <circle r="6" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="8s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>
            <circle r="4.5" fill="#6366f1" opacity="0.45">
              <animateMotion dur="8s" begin="-0.28s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.18">
              <animateMotion dur="8s" begin="-0.56s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
            </circle>

            {/* ── Ring 2 (r=140) — 2 particles, 14 s ── */}
            <circle r="5.5" fill="#22d3ee" filter="url(#pGlow)">
              <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="4" fill="#22d3ee" opacity="0.45">
              <animateMotion dur="14s" begin="-0.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="2.5" fill="#22d3ee" opacity="0.18">
              <animateMotion dur="14s" begin="-0.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>

            <circle r="4.5" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="14s" begin="-7s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.45">
              <animateMotion dur="14s" begin="-7.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>
            <circle r="2" fill="#6366f1" opacity="0.18">
              <animateMotion dur="14s" begin="-7.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
            </circle>

            {/* ── Ring 3 (r=200) — 3 particles, 22 s ── */}
            <circle r="5" fill="#22d3ee" filter="url(#pGlow)">
              <animateMotion dur="22s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="3.5" fill="#22d3ee" opacity="0.45">
              <animateMotion dur="22s" begin="-0.45s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="2.5" fill="#22d3ee" opacity="0.18">
              <animateMotion dur="22s" begin="-0.9s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>

            <circle r="4" fill="#6366f1" filter="url(#pGlow)">
              <animateMotion dur="22s" begin="-7.33s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>
            <circle r="3" fill="#6366f1" opacity="0.45">
              <animateMotion dur="22s" begin="-7.78s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
            </circle>

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
