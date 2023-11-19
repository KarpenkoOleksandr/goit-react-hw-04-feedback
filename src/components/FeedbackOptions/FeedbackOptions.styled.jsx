import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding-top: ${p => p.theme.spacing(2)};
  padding-right: ${p => p.theme.spacing(6)};
  padding-bottom: ${p => p.theme.spacing(2)};
  padding-left: ${p => p.theme.spacing(6)};
  font-size: 16px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.black};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;