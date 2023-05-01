import { StyledButton } from './styles';

const Button = ({ children, action, outline, inverted, size, className }) => {
  return (
    <StyledButton
      outline={outline}
      inverted={inverted}
      size={size}
      onClick={action}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
