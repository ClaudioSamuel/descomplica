import { DataTypes} from 'sequelize';
// conexão com o bd
import sequelize from '../utils/database.mjs';

// configurando  a tabela
const User = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        ype:DataTypes.STRING,
        allowNull:false
    },
    email:DataTypes.STRING,
    gender:DataTypes.STRING
}, { underscore: true });

export default User;