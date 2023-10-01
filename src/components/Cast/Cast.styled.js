import { styled } from 'styled-components';

export const CastUl = styled.ul`
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;

export const CastLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  font-size: 16px;
  width: 150px;
  height: 390px;
  cursor: pointer;
  overflow: hidden;
  list-style: none;
`;
