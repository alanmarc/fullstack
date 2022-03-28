import styled from 'styled-components'

const PrimaryButton = styled.button`
  border-radius: ${({ radius }) => (radius > -1) && `${radius}px`};
  background-color: ${({ background }) => background};
  ${({ margin }) => `margin: ${margin}`};
  color: white;
  text-transform: initial;
  padding: 0.8em 1em;
  font-weight: 400;
  display: block;
  width: 100%;
  font-size: 16px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  border: none;
  appearance: none;
  box-sizing: border-box;
  text-decoration: none;
  outline: 0px;
  transition: 0.3s;
  $:active {
    transform: scale(0.5);
  }
`

function Button(props) {
  const { radius, background, disabled, ...otherProps } = props
  return (
    <PrimaryButton
      {...otherProps}
      radius={radius}
      background={!disabled ? background : '#c1c1c1'}
      disabled={disabled}
    />
  )
}

Button.defaultProps = {
  radius: 4,
  background: 'var(--second)',
  disabled: false
}

export default Button