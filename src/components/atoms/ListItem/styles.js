import styled from "styled-components";

export const StyledListItem = styled.li`
list-style-type: none;
padding: 8px 16px 8px;
border-bottom: 1px solid ${(props)=>(props.theme.palette.secondary.main)};
color: ${(props)=>(props.theme.palette.background.light)};
cursor: pointer;
transition: all 150ms ease-in-out;

&:hover {
    border-bottom: 1px solid ${(props)=>(props.theme.palette.primary.main)};
}
`;