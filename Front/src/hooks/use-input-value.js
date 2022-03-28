import { useState } from 'react';

function useInputValue(initialState = '') {
  const [value, setValue] = useState(initialState)
  const onChange = event => {
    const el = event.target
    setValue(el.value)
    sessionStorage.setItem(el.name, el.value)
  }
  const clean = () => setValue('')
  return { value, onChange, clean }
}

export default useInputValue;
