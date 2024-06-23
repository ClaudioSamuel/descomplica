import { DataTypes} from 'sequelize';
// conexão com o bd
import sequelize from '../utils/database.mjs';

// configurando  a tabela
const Teacher = sequelize.define('teachers', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, { underscore: true });

export default Teacher;