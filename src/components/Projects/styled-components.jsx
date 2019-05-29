import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 72px 24px;
`;

export const Header = styled.h2`
  color: #3f3f44;
  font-size: 20px;
  margin-bottom: 36px;
  text-decoration: underline #693afa;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.a`
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  color: #3f3f44;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 260px;
  padding: 10px 50px 20px 50px;
  margin: 8px;
  text-decoration: none;
  transition: all .2s ease-in-out;
  width: 30%;

  &:hover {
    border: 1px solid #693afa;
    /* cursor: pointer; */
    /* transform: scale(1.05); */
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 180px;
  }
`;

export const Brand = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 40px;


`;
