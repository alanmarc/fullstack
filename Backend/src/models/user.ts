import { DataTypes } from 'sequelize'
import db from '../db/connection';


const User = db.define('users_test_alan_marcos', {
  name: { type: DataTypes.STRING },
  secondName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  secondLastName: { type: DataTypes.STRING },
  birthday: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER },
})

export default User;