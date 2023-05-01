import { StyledButton } from './styles';

const Button = ({ children, action, outline, inverted, danger, warning, size, className }) => {
  return (
    <StyledButton
      outline={outline}
      inverted={inverted}
      danger={danger}
      warning={warning}
      size={size}
      onClick={action}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
