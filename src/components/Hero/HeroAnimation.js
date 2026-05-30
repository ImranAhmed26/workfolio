import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-18px); }
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
`;

const FloatingScene = styled.div`
  width: 100%;
  height: 100%;
  animation: ${float} 7s ease-in-out infinite;
`;

const HeroAnimation = () => {
  const [tilt,        setTilt]        = useState({ x: 0, y: 0 });
  const [hovering,    setHovering]    = useState(false);
  const [hoveredRing, setHoveredRing] = useState(0); // 0 = none, 1/2/3
  const wrapperRef = useRef(null);

  /* ── Mouse handlers ── */
  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -8,
      y: ((e.clientX - cx) / (rect.width  / 2)) * 8,
    });
  };
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    setHoveredRing(0);
    setTilt({ x: 0, y: 0 });
  };

  const tiltTransition = hovering
    ? 'transform 0.08s ease-out'
    : 'transform 0.55s ease';

  /* ── Per-ring helpers ── */

  // Opacity of the whole particle group for a ring
  const groupStyle = (n) => ({
    opacity:    hoveredRing === 0 ? 1 : hoveredRing === n ? 1 : 0.5,
    transition: 'opacity 0.35s ease',
  });

  // Visible ring circle attributes
  const ringProps = (n, color, base) => ({
    stroke:        color,
    strokeWidth:   hoveredRing === n ? 2.5 : 1,
    strokeOpacity: hoveredRing === n ? 0.65 : hoveredRing !== 0 ? base * 0.6 : base,
    fill:          hoveredRing === n
      ? (n === 3 ? 'rgba(34,211,238,0.025)' : 'rgba(99,102,241,0.03)')
      : 'none',
    style: { transition: 'all 0.35s ease', pointerEvents: 'none' },
  });

  // Aura halo opacity
  const auraOp = (n, def) =>
    ({ strokeOpacity: hoveredRing === n ? def : 0, style: { transition: 'stroke-opacity 0.35s ease', pointerEvents: 'none' } });

  // Normal particle opacity
  const normOp  = (n) => ({ style: { opacity: hoveredRing === n ? 0 : 1, transition: 'opacity 0.25s', pointerEvents: 'none' } });
  // Bright particle opacity
  const brightOp = (n) => ({ style: { opacity: hoveredRing === n ? 1 : 0, transition: 'opacity 0.25s', pointerEvents: 'none' } });

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TiltScene style={{ transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: tiltTransition }}>
        <FloatingScene>
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Normal particle glow */}
              <filter id="pGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Bright particle glow (on hover) */}
              <filter id="pGlowBright" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="9" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Center orb glow */}
              <filter id="cGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>

              {/* Wide soft blur for aura halos */}
              <filter id="auraBlur" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="16" />
              </filter>

              <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.14" />
                <stop offset="55%"  stopColor="#22d3ee" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"    />
              </radialGradient>
            </defs>

            {/* Background ambient glow */}
            <circle cx="250" cy="250" r="230" fill="url(#bgGlow)" />

            {/* Orbital path defs — invisible, used by animateMotion */}
            <path id="orb1" d="M 170,250 a 80,80   0 1,0 160,0  a 80,80   0 1,0 -160,0"  />
            <path id="orb2" d="M 110,250 a 140,140  0 1,0 280,0  a 140,140  0 1,0 -280,0" />
            <path id="orb3" d="M 50,250  a 200,200  0 1,0 400,0  a 200,200  0 1,0 -400,0" />

            {/* ══════════════════════════════════════
                Ring 1  (r = 80, indigo)
                Hit area spans r 50 → 110
            ══════════════════════════════════════ */}
            <circle cx="250" cy="250" r="80" fill="none" stroke="#6366f1" strokeWidth="32"
              {...auraOp(1, 0.1)} filter="url(#auraBlur)"
            />
            <circle cx="250" cy="250" r="80" {...ringProps(1, '#6366f1', 0.18)} />

            <g style={groupStyle(1)}>
              {/* Lead — normal */}
              <circle r="6" fill="#6366f1" filter="url(#pGlow)" {...normOp(1)}>
                <animateMotion dur="8s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
              </circle>
              {/* Lead — bright */}
              <circle r="10" fill="#6366f1" filter="url(#pGlowBright)" {...brightOp(1)}>
                <animateMotion dur="8s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
              </circle>
              {/* Trails */}
              <circle r="4.5" fill="#6366f1" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="8s" begin="-0.28s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
              </circle>
              <circle r="3" fill="#6366f1" opacity="0.18" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="8s" begin="-0.56s" repeatCount="indefinite"><mpath href="#orb1" /></animateMotion>
              </circle>
            </g>

            {/* Hit area — r=80, strokeWidth=60 covers r 50→110 */}
            <circle cx="250" cy="250" r="80" fill="none" stroke="transparent" strokeWidth="60"
              style={{ cursor: 'default' }}
              onMouseEnter={() => setHoveredRing(1)}
              onMouseLeave={() => setHoveredRing(0)}
            />

            {/* ══════════════════════════════════════
                Ring 2  (r = 140)
                Hit area spans r 110 → 170
            ══════════════════════════════════════ */}
            <circle cx="250" cy="250" r="140" fill="none" stroke="#22d3ee" strokeWidth="32"
              {...auraOp(2, 0.08)} filter="url(#auraBlur)"
            />
            <circle cx="250" cy="250" r="140" {...ringProps(2, '#6366f1', 0.12)} />

            <g style={groupStyle(2)}>
              {/* Particle A — cyan */}
              <circle r="5.5" fill="#22d3ee" filter="url(#pGlow)" {...normOp(2)}>
                <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="9" fill="#22d3ee" filter="url(#pGlowBright)" {...brightOp(2)}>
                <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="4" fill="#22d3ee" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="14s" begin="-0.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="2.5" fill="#22d3ee" opacity="0.18" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="14s" begin="-0.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>

              {/* Particle B — indigo, 180° offset */}
              <circle r="4.5" fill="#6366f1" filter="url(#pGlow)" {...normOp(2)}>
                <animateMotion dur="14s" begin="-7s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="8" fill="#6366f1" filter="url(#pGlowBright)" {...brightOp(2)}>
                <animateMotion dur="14s" begin="-7s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="3" fill="#6366f1" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="14s" begin="-7.38s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
              <circle r="2" fill="#6366f1" opacity="0.18" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="14s" begin="-7.76s" repeatCount="indefinite"><mpath href="#orb2" /></animateMotion>
              </circle>
            </g>

            {/* Hit area — r=140, strokeWidth=60 covers r 110→170 */}
            <circle cx="250" cy="250" r="140" fill="none" stroke="transparent" strokeWidth="60"
              style={{ cursor: 'default' }}
              onMouseEnter={() => setHoveredRing(2)}
              onMouseLeave={() => setHoveredRing(0)}
            />

            {/* ══════════════════════════════════════
                Ring 3  (r = 200, cyan)
                Hit area spans r 170 → 230
            ══════════════════════════════════════ */}
            <circle cx="250" cy="250" r="200" fill="none" stroke="#22d3ee" strokeWidth="32"
              {...auraOp(3, 0.07)} filter="url(#auraBlur)"
            />
            <circle cx="250" cy="250" r="200" {...ringProps(3, '#22d3ee', 0.08)} />

            <g style={groupStyle(3)}>
              {/* Particle A — cyan */}
              <circle r="5" fill="#22d3ee" filter="url(#pGlow)" {...normOp(3)}>
                <animateMotion dur="22s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="9" fill="#22d3ee" filter="url(#pGlowBright)" {...brightOp(3)}>
                <animateMotion dur="22s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#22d3ee" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="22s" begin="-0.45s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="2.5" fill="#22d3ee" opacity="0.18" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="22s" begin="-0.9s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>

              {/* Particle B — indigo, 120° offset */}
              <circle r="4" fill="#6366f1" filter="url(#pGlow)" {...normOp(3)}>
                <animateMotion dur="22s" begin="-7.33s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="8" fill="#6366f1" filter="url(#pGlowBright)" {...brightOp(3)}>
                <animateMotion dur="22s" begin="-7.33s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="3" fill="#6366f1" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="22s" begin="-7.78s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>

              {/* Particle C — cyan, 240° offset */}
              <circle r="4" fill="#22d3ee" filter="url(#pGlow)" {...normOp(3)}>
                <animateMotion dur="22s" begin="-14.67s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="8" fill="#22d3ee" filter="url(#pGlowBright)" {...brightOp(3)}>
                <animateMotion dur="22s" begin="-14.67s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
              <circle r="2.5" fill="#22d3ee" opacity="0.45" style={{ pointerEvents: 'none' }}>
                <animateMotion dur="22s" begin="-15.12s" repeatCount="indefinite"><mpath href="#orb3" /></animateMotion>
              </circle>
            </g>

            {/* Hit area — r=200, strokeWidth=60 covers r 170→230 */}
            <circle cx="250" cy="250" r="200" fill="none" stroke="transparent" strokeWidth="60"
              style={{ cursor: 'default' }}
              onMouseEnter={() => setHoveredRing(3)}
              onMouseLeave={() => setHoveredRing(0)}
            />

            {/* ── Center pulsing orb (always on top) ── */}
            <circle cx="250" cy="250" r="14" fill="#6366f1" filter="url(#cGlow)">
              <animate attributeName="r"       values="12;17;12"    dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="250" r="22" fill="none" stroke="#6366f1" strokeWidth="1.5">
              <animate attributeName="r"             values="20;34;20"    dur="3s" repeatCount="indefinite" />
              <animate attributeName="strokeOpacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </FloatingScene>
      </TiltScene>
    </Wrapper>
  );
};

export default HeroAnimation;
