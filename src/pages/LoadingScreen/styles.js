import styled from "styled-components";
import fallbackImage from "../../assets/Destytojas.jpg";

export const StyledPhotoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${fallbackImage});
  background-size: cover;
  background-position: center;
`;
