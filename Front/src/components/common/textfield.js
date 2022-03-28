import styled from "styled-components"
import useFocusElement from '../../hooks/use-focus-element'
import PropTypes from 'prop-types'

const TextStyled = styled.div`
  display: inherit;
  padding: 8px 0;
  
  .form-input {
    display: inherit;
    position: relative;
    
  }
  label, .text {
    background-color: var(--gray);
    text-align: center;
  }
  label {
    position: initial;
    width: auto;
    padding: 3px;
    top: -8px;
    left: 16px;
    opacity: ${({ isFocus, isNotEmpty = '' }) => `${isFocus || isNotEmpty  ? 1 : 0}`};
  }
  .text {
    margin-top: 4px;
    padding: 18.5px 14px;
    outline: 0;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0.15);
    box-sizing: border-box;
    &::placeholder {
      font-size: 16px;
    }
  }
`

function TextField(props) {
  const { type, placeholder, name, value, onChange, min, max, maxLength,  ...otherProps } = props
  const { isFocus, handleBlur, handleFocus } = useFocusElement(false)
  return ( 
    <TextStyled isFocus={isFocus} isNotEmpty={Boolean(value.length)}>
      <div className="form-input">
        <label htmlFor={name}>{placeholder}</label>
        <input 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          className="text" 
          placeholder={!isFocus ? placeholder : ''} 
          type={type} 
          name={name} 
          id={name} 
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          maxLength={maxLength}
          {...otherProps}
        />
      </div>
    </TextStyled>
  )
}

TextField.defaultProps = {
  type: 'text',
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default TextField
