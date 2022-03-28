import { useQuery } from "@apollo/client";
import { createContext, useState, useLayoutEffect, useEffect } from "react";
import useInputValue from '../hooks/use-input-value';
import { GET_USERS } from '../graphql/queries';


const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const UserContext = createContext()

function checkStep() {
  const step = sessionStorage.getItem('UIstep')
  const hasStep = Boolean(step) 
  if(hasStep && !isNaN(step)) return Number(step)
  return 0
}

function getInitialState(key) {
  return sessionStorage.getItem(key) || ''
}

function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const addUser = (newUser = {}) => setUsers([...users, newUser])
    //const newUserList = [...users, newUser]//Aquise cambia 
    //setUsers(newUserList)
    //sessionStorage.setItem('usersList', JSON.stringify(newUserList));
  
  const [UIstep, setUIStep] = useState(checkStep())
  const handleStep = (value = 0) => {
    sessionStorage.setItem('UIstep', value)
    setUIStep(Number(value))
  }
  const name = useInputValue(getInitialState('name'));
  const secondName = useInputValue(getInitialState('secondName'));
  const lastName = useInputValue(getInitialState('lastName'));
  const secondLastName = useInputValue(getInitialState('secondLastName'));
  const day = useInputValue(getInitialState('day'))
  const month = useInputValue(getInitialState('month'))
  const year = useInputValue(getInitialState('year'))
  const email = useInputValue(getInitialState('email'))
  const phone = useInputValue(getInitialState('phone'))
  const fullName = `${name.value} ${secondName.value} ${lastName.value} ${secondLastName.value}`;
  const birthDay = `${day.value} de ${months[month.value < 12 ? month.value - 1 : 11]} ${year.value}`

  const { data } = useQuery(GET_USERS)//Agrego
  useEffect(() => {
    if(data?.getAllUsers) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  const isDisabledNextBtn = () => {
    switch(UIstep) {
      case 0:
        return !name.value || !lastName.value || !secondLastName.value;
      case 1:
        return !day.value || !month.value || !year.value
      case 2:
        return !email.value || !phone.value;
      default:
        return true;
    }
  }
  
  /*const handleSubmit = () => {
    if (!email.value && !phone.value) return
    addUser({
      id: Math.random().toString(36).slice(2),
      name: name.value,
      secondName: secondName.value,
      lastName: lastName.value,
      secondLastName: secondLastName.value,
      email: email.value,
      phone: phone.value,
      birthday: birthDay,
    })
    setTimeout(() => {
      name.clean()
      secondName.clean()
      lastName.clean()
      secondLastName.clean()
      day.clean()
      month.clean()
      year.clean()
      email.clean()
      phone.clean()
      setUIStep(0);
    }, 100)
  }
*/
/*
  useLayoutEffect(() => {
    const userList = JSON.parse(getInitialState('usersList') || '[]');
    console.log(userList);
    if (userList.length) {
      setUsers(userList);
    }
  }, [])
*/
  return (
    <UserContext.Provider value={{
      UIstep,
      handleStep,
      name,
      secondName,
      lastName,
      secondLastName,
      day,
      month,
      year,
      email,
      phone,
      users,
      fullName,
      birthDay,
      isDisabledNextBtn,
      addUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider