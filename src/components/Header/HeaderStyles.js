import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: rgba(5, 8, 22, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media screen and (max-width: 768px) {
    padding: 0 32px;
    height: 56px;
  }

  @media screen and (max-width: 640px) {
    padding: 0 16px;
    height: 52px;
  }
`;

export const Logo = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.01em;
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const NavLink = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(241, 245, 249, 0.5);
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #f1f5f9;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(241, 245, 249, 0.5);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #f1f5f9;
    background: rgba(99, 102, 241, 0.12);
  }
`;

/* Legacy exports kept for Footer import compatibility */
export const Span = styled.span``;
export const ContactDropDown = styled.button``;
export const NavProductsIcon = styled.span``;
