import styled from 'styled-components'

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 8px 0 64px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 8px 0 48px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 12px;
    margin: 8px 0 40px;
  }
`

export const Box = styled.div`
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1 0%, #22d3ee 100%);
  }

  &:hover {
    border-color: rgba(99, 102, 241, 0.22);
    transform: translateY(-4px);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 20px;
  }
`

export const BoxNum = styled.h3`
  font-weight: 800;
  font-size: 58px;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 14px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 44px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 40px;
    margin-bottom: 10px;
  }
`

export const BoxText = styled.p`
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: rgba(241, 245, 249, 0.55);
  font-weight: 400;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`

/* Legacy exports */
export const Join = styled.div``
export const JoinText = styled.h5``
export const IconContainer = styled.div``
