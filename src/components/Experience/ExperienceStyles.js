import styled, { css, keyframes } from 'styled-components';

const dotPulse = keyframes`
  0%   { box-shadow: 0 0 0 0   rgba(34, 211, 238, 0.55); }
  70%  { box-shadow: 0 0 0 12px rgba(34, 211, 238, 0);    }
  100% { box-shadow: 0 0 0 0   rgba(34, 211, 238, 0);    }
`;

/* ── Wrapper — contains the gradient timeline line ── */
export const TimelineWrapper = styled.div`
  position: relative;
  margin: 8px 0 56px;
  padding-left: 56px;

  /* Gradient vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 28px;
    bottom: 28px;
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(
      180deg,
      rgba(99, 102, 241, 0.15) 0%,
      #6366f1 20%,
      #22d3ee 80%,
      rgba(34, 211, 238, 0.1) 100%
    );
  }

  @media ${p => p.theme.breakpoints.sm} {
    padding-left: 40px;
    &::before { left: 8px; }
  }
`;

/* ── Individual row ── */
export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* ── Dot on the line ── */
export const ExpDot = styled.div`
  position: absolute;
  /* center = 12px from wrapper left (line center); dot radius = 11px; item starts at 56px */
  left: -55px;
  top: 26px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${p => p.current
    ? 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
    : 'rgba(15, 23, 42, 0.95)'};
  border: 2px solid ${p => p.current
    ? '#22d3ee'
    : 'rgba(99, 102, 241, 0.45)'};
  z-index: 1;

  /* Inner dot */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.current ? '#fff' : 'rgba(99, 102, 241, 0.9)'};
  }

  /* Pulsing ring on current role */
  ${p => p.current && css`
    animation: ${dotPulse} 2.2s ease infinite;
  `}

  @media ${p => p.theme.breakpoints.sm} {
    left: -40px;
    width: 18px;
    height: 18px;
    top: 22px;
    &::after { width: 6px; height: 6px; }
  }
`;

/* ── Glass card ── */
export const ExpCard = styled.div`
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid ${p => p.current
    ? 'rgba(99, 102, 241, 0.22)'
    : 'rgba(255, 255, 255, 0.07)'};
  border-radius: 16px;
  padding: 24px 28px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${p => p.current
      ? 'linear-gradient(180deg, #6366f1 0%, #22d3ee 100%)'
      : 'linear-gradient(180deg, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.1) 100%)'};
    border-radius: 16px 0 0 16px;
  }

  &:hover {
    transform: translateX(6px);
    border-color: rgba(99, 102, 241, 0.28);
    box-shadow: -6px 0 24px rgba(99, 102, 241, 0.08);
  }

  @media ${p => p.theme.breakpoints.sm} {
    padding: 18px 20px;
  }
`;

/* ── Card header row (period + badge) ── */
export const CardTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CardPeriod = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(241, 245, 249, 0.4);
`;

export const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #22d3ee;
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 999px;
  padding: 2px 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22d3ee;
    flex-shrink: 0;
  }
`;

/* ── Company name ── */
export const CardCompany = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;

  ${p => p.current
    ? css`
      background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
    : css`color: #f1f5f9;`}

  @media ${p => p.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

/* ── Job title ── */
export const CardRole = styled.p`
  font-size: 1.45rem;
  font-weight: 500;
  color: rgba(99, 102, 241, 0.85);
  margin-bottom: 14px;
`;

/* ── Description ── */
export const CardDesc = styled.p`
  font-size: 1.45rem;
  line-height: 2.4rem;
  color: rgba(241, 245, 249, 0.5);
`;
