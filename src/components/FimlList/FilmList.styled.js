import { styled } from 'styled-components';

export const MoviesUl = styled.ul`
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;

export const MoviesLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 150px;
  max-height: 420px;
  cursor: pointer;
  overflow: hidden;
  list-style: none;
`;

export const MoviesDiv = styled.div`
  min-height: 160px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const MoviesImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  padding-bottom: 15px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.1);
    border: 3px dotted #3a7999;
    background: rgba(0, 0, 0, 0);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    cursor: zoom-in;
  }
`;

export const MoviesHeader = styled.h3`
  font-size: 14px;
  color: black;
  list-style: none;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;
