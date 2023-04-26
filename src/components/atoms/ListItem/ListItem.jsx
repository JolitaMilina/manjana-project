import { StyledListItem } from "./styles";

const ListItem = ({ title, action }) => {
    return (
    <StyledListItem onClick={action}>
        {title}
    </StyledListItem>
    );
  };
  
  export default ListItem;
