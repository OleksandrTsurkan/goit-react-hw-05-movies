import { styled } from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const ButtonSearch = styled.button`
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

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 24px;
  border: none;
  border: 1px solid black;
  height: 60px;
  border-radius: 6px;
  border: 3px solid #3a7999;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;