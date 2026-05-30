import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0 0 48px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 16px;
  }
`

export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%` : `min-content`};
  }
`

export const CarouselItem = styled.div`
  border-radius: 12px;
  max-width: 220px;
  cursor: pointer;
  padding: 12px;
  transition: opacity 0.3s ease;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 150px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 28px;
    min-width: 130px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    overflow: visible;
    position: relative;
    height: fit-content;
    opacity: ${(props) => props.active === props.index ? 1 : 0.3};
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: 800;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.03em;
  display: flex;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
  }
`

export const CarouselItemImg = styled.svg`
  margin-left: 16px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0));
  width: 100%;
  opacity: 0.4;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 10px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: rgba(241, 245, 249, 0.55);
  padding-right: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.2rem;
    line-height: 1.9rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    line-height: 1.7rem;
    padding-right: 0;
  }
`

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 40px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 6px;
  opacity: ${(props) => props.active === props.index ? 1 : 0.22};
  transform: ${(props) => props.active === props.index ? `scale(1.8)` : `scale(1)`};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  border-radius: 10px;
  margin: auto;
  width: 4px;
  height: 4px;
`

export const TimelineLabel = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(99, 102, 241, 0.65);
  margin-bottom: 28px;
`
