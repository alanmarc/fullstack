import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import User from './user'
import { UserContext } from '../../context/user-context'
import { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const WrapperStyled = styled(Wrapper)`
  padding: 1rem;
`

const UsersStyled = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
  overflow-y: auto;
  background-color: var(--primary);
  width: 100%;
  display: none;
  section {
    height: 85vh;
    overflow-y: scroll;
  }
  @media screen and (min-width: 768px) {
    display: initial;
    max-width: 300px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 430px;
  }
  /* .user-enter {
    transform: translateX(-)
  } */
  .user-enter-active {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  .user-exit {
  }
  .user-exit-active {
  }

  @keyframes bounce {
    0% {
      transform: translate(300px, 400px);
    }
    40% {
      transform: translate(0, 400px);
    }
    80% {
      transform: translate(0);
    }
    100% {
      transform: translate(0);
    }
  }
`

function UserList() {
  const { users } = useContext(UserContext)
  return (
    <UsersStyled>
      <WrapperStyled>
        <h1>Lista de Usuarios</h1>
        <TransitionGroup component="section">
          {users
            .slice()
            .reverse()//probable cambio
            .map((user) => (
              <CSSTransition key={user.id} classNames="user">
                <User user={user} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </WrapperStyled>
    </UsersStyled>
  )
}

export default UserList
