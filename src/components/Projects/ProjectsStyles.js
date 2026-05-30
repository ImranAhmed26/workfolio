import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px 0 56px;
  width: 100%;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 0 40px;
  }
`;

export const BlogCard = styled.div`
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.45);
    border-color: rgba(99, 102, 241, 0.3);
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CardBody = styled.div`
  padding: 22px 24px 24px;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

export const CardDescription = styled.p`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: rgba(241, 245, 249, 0.52);
  margin-bottom: 18px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
`;

export const Tag = styled.span`
  font-size: 1.15rem;
  font-weight: 500;
  color: rgba(99, 102, 241, 0.9);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 999px;
  padding: 3px 11px;
  letter-spacing: 0.01em;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  color: ${({ secondary }) => secondary ? 'rgba(241, 245, 249, 0.65)' : '#f1f5f9'};
  background: ${({ secondary }) => secondary ? 'transparent' : 'rgba(99, 102, 241, 0.15)'};
  border: 1px solid ${({ secondary }) => secondary ? 'rgba(255, 255, 255, 0.09)' : 'rgba(99, 102, 241, 0.28)'};

  &:hover {
    background: ${({ secondary }) => secondary ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.25)'};
    color: #f1f5f9;
    border-color: ${({ secondary }) => secondary ? 'rgba(255, 255, 255, 0.18)' : 'rgba(99, 102, 241, 0.5)'};
  }
`;

/* Legacy exports */
export const Img = styled.img``;
export const TitleContent = styled.div``;
export const HeaderThree = styled.h3``;
export const Hr = styled.hr``;
export const CardInfo = styled.p``;
export const UtilityList = styled.ul``;
export const ExternalLinks = styled.a``;
export const Intro = styled.div``;
