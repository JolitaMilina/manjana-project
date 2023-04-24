import { StyledButton } from './styles';

const Button = ({ children, action, outline, inverted, size }) => {
  return (
    <StyledButton
      outline={outline}
      inverted={inverted}
      size={size}
      onClick={action}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
