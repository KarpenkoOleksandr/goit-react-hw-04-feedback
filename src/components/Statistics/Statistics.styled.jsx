import styled from 'styled-components';

export const Container = styled.div`
max-width:100%;
width: 400px;
`;

export const Item = styled.p`
text-align: center;
color: ${p => p.theme.colors.white};
margin-bottom: ${p => p.theme.spacing(4)};
`;

export const Value = styled.span`
margin-left: ${p => p.theme.spacing(1)};
color: ${p => p.theme.colors.white};
`;