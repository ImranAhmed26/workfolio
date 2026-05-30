import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const HeroSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 148px 48px 96px;
  box-sizing: content-box;
  animation: ${fadeUp} 0.75s ease forwards;

  @media screen and (max-width: 768px) {
    padding: 120px 48px 72px;
  }

  @media screen and (max-width: 640px) {
    padding: 100px 16px 56px;
    width: calc(100vw - 32px);
  }
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #22d3ee;
  background: rgba(34, 211, 238, 0.07);
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 999px;
  padding: 6px 16px;
  width: fit-content;
  margin-bottom: 28px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22d3ee;
    flex-shrink: 0;
    animation: ${pulse} 2.2s ease infinite;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.9rem;
  line-height: 3.2rem;
  color: rgba(241, 245, 249, 0.52);
  max-width: 580px;
  font-weight: 400;
  margin-bottom: 44px;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.8rem;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 32px;
  }
`;
