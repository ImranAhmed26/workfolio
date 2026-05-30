import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "64px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.nopadding ? "0" : "48px 48px 0"};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "40px 16px 0"};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '48px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.main
    ? 'linear-gradient(135deg, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 100%)'
    : 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)'
  };
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  padding: ${(props) => props.main ? '40px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '52px' : '40px'};
    line-height: ${(props) => props.main ? '60px' : '48px'};
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '32px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '36px' : '32px'};
    line-height: ${(props) => props.main ? '44px' : '40px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 700px;
  font-size: 1.9rem;
  line-height: 3.2rem;
  font-weight: 400;
  padding-bottom: 3.2rem;
  color: rgba(241, 245, 249, 0.55);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.7rem;
    line-height: 2.8rem;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 2.4rem;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 40px;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  margin: ${(props) => props.divider ? "4rem 0" : "0 0 20px"};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 28px;
    height: 2px;
  }
`

export const SectionSubText = styled.p`
  max-width: 700px;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.8rem;
  color: rgba(241, 245, 249, 0.6);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    line-height: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`

export const SecondaryBtn = styled.button`
  color: #f1f5f9;
  background: none;
  border: 1px solid rgba(99, 102, 241, 0.4);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 28px;
  font-weight: 600;
  font-size: 1.5rem;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.12);
    border-color: rgba(99, 102, 241, 0.7);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 10px 20px;
    width: 100%;
    font-size: 1.4rem;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '200px'};
  height: ${({ alt }) => alt ? '48px' : '52px'};
  border-radius: 10px;
  font-size: ${({ alt }) => alt ? '1.7rem' : '1.8rem'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #fff;
  background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
  cursor: pointer;
  transition: 0.4s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '180px'};
    height: ${({ alt }) => alt ? '48px' : '48px'};
    font-size: 1.6rem;
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 46px;
    font-size: 1.5rem;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: opacity 0.3s ease;
  font-size: ${({ alt }) => alt ? '1.7rem' : '1.8rem'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.25s ease;
  justify-content: center;
  border-radius: 8px;
  padding: 8px;

  &:hover {
    background-color: rgba(99, 102, 241, 0.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
