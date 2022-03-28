import TextField from '../common/textfield';
import { FormContainerStyled } from './styles';
import { UserContext } from '../../context/user-context'
import { useContext } from 'react'

function FormContact(props) {
  const { email, phone } = useContext(UserContext)
  return (
    <FormContainerStyled {...props}>
      <h2>Datos de contacto</h2>
      <TextField
        placeholder="Correo electrónico"
        name="email"
        value={email.value}
        onChange={email.onChange}
        required
      />
      <TextField
        required
        placeholder="Télefono celular"
        name="phone"
        value={phone.value}
        onChange={phone.onChange}
      />
    </FormContainerStyled>
  );
}

export default FormContact;
