import styled from 'styled-components';

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 8px 0 56px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled.div`
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #6366f1 0%, #22d3ee 100%);
    border-radius: 16px 0 0 16px;
  }

  &:hover {
    border-color: rgba(99, 102, 241, 0.22);
    transform: translateY(-4px);
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 14px;
  display: flex;
`;

export const CardTitle = styled.h4`
  font-size: 1.7rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

export const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Pill = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(241, 245, 249, 0.65);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 4px 14px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
    color: rgba(241, 245, 249, 0.9);
  }
`;

/* Legacy exports */
export const List = styled.ul``;
export const ListContainer = styled.div``;
export const ListTitle = styled.h4``;
export const ListParagraph = styled.p``;
export const ListItem = styled.li``;
export const ListIcon = styled.img``;
export const ImageContainer = styled.div``;
export const MainImage = styled.img``;
