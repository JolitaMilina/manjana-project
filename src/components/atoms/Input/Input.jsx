import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';
import { useTheme } from 'styled-components';
import { useRef, useEffect } from 'react';

const Input = (props) => {
  const theme = useTheme();

  const { type, value, setValue, icon, placeholder } = props;

  const inputWrapperRef = useRef();
  const inputRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    const handleOutsideInputClick = (e) => {
      e.stopPropagation();

      if (!inputWrapperRef.current.contains(e.target)) {
        inputWrapperRef.current.style.borderColor = 'none';
        iconRef.current.style.color = theme.palette.background.light;
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current.style.borderColor = theme.palette.secondary.main;
    inputWrapperRef.current.style.borderWidth = '1px';
    inputWrapperRef.current.style.borderStyle = 'solid';
    inputRef.current.focus();
    iconRef.current.style.color = theme.palette.secondary.main;
  };

  return (
    <StyledInputWrapper {...props} ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      <StyledInput
        type={type || 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
};

export default Input;
