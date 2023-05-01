import { StyledButton } from './styles';

const Button = ({ children, action, outline, inverted, focused, size }) => {
  return (
    <StyledButton
      outline={outline}
      inverted={inverted}
      focused={focused}
      size={size}
      onClick={action}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
