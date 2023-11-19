import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 100%;
width: 400px;
padding: ${p => p.theme.spacing(2)};
background-color: ${p => p.theme.colors.background};
border-radius: ${p => p.theme.radii.md};
margin-bottom: ${p => p.theme.spacing(2)};
`;

export const Title = styled.h2`
margin-bottom: ${p => p.theme.spacing(4)};
text-align: center;
color: ${p => p.theme.colors.white};
`;