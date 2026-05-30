import styled from 'styled-components'

export const FooterWrapper = styled.section`
  max-width: 1040px;
  padding: 0 48px 56px;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkList = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  gap: 48px;
  padding: 40px 0 32px;

  @media ${props => props.theme.breakpoints.sm} {
    gap: 32px;
    padding: 32px 0 24px;
  }
`

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinkTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(241, 245, 249, 0.3);
  margin-bottom: 8px;
`

export const LinkItem = styled.a`
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: rgba(241, 245, 249, 0.6);
  transition: color 0.2s ease;

  &:hover {
    color: #f1f5f9;
  }
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Slogan = styled.p`
  font-size: 1.4rem;
  color: rgba(241, 245, 249, 0.3);
  letter-spacing: 0.02em;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
