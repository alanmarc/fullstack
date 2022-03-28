import styled from "styled-components";

const UserStyled = styled.article`
  padding: 1em;
  background-color: white;
  margin: 10px 0;
  border-radius: 8px;
  p {
    margin: 5px 0;
    font-size: 14px;
  }
  animation-duration: 3s;
  animation-name: bounce;
  @keyframes bounce {
    from: {
      margin-left: 100%;
      width: 300%;
    }
    to: {
      margin-left: 0%;
      width: 100%;
    }
  }
`

function User(props) {
  const {
    id,
    name,
    secondName,
    lastName,
    secondLastName,
    birthday,
    email,
    phone,
  } = props.user
  return (
    <UserStyled>
      <p><strong>ID</strong>: {id}</p>
      <p><strong>Nombre</strong>: {name} {secondName} {lastName} {secondLastName} </p>
      <p><strong>Fecha de nacimiento</strong>: {birthday} </p>
      <p><strong>Email</strong>: {email} </p>
      <p><strong>Teléfono</strong>: {phone} </p>
    </UserStyled>
  );
}

export default User;