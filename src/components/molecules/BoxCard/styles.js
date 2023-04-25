import styled from 'styled-components';

export const StyledBoxCardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2.25em;
width: 100%;
`

export const StyledBoxCardImg = styled.div`
font-size: 7em;
align-self: center;
color:${(props) => (props.theme.palette.secondary.main)};

.fa-user-plus{
  padding-left: 42px;
}

`;

export const StyledBoxCardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1em;
text-align: center;

h3 {
  color: ${(props) => (props.theme.palette.background.light)};
} 

p {
  color: ${(props) => (props.theme.palette.background.light)};
}
`;
