import { styled } from 'styled-components';

export const MoviesDetailsSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MoviesDetailsMainText = styled.h2`
  color: black;
  font-size: 24px;
  display: block;
  margin: auto;
  padding: 20px;
  border: 3px solid #3a7999;
  border-radius: 20px;
`;

export const MoviesDetailsDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const MoviesDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 380px;
`;

export const MoviesAdditionalUl = styled.ul`
  display: flex;
  gap: 75px;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;

export const MoviesAdditionalLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  overflow: hidden;
  list-style: none;
`;


export const ButtonAdditional = styled.button`
  height: 70px;
  width: 180px;
  border: 3px solid #3a7999;
  border-radius: 20px;
  background-color: #fffcfc;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    border: 3px dotted #3a7999;
    color: red;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;
