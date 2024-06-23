import { DataTypes} from 'sequelize';
// conexão com o bd
import sequelize from '../utils/database.mjs';

// configurando  a tabela
const Course = sequelize.define('courses', {
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

export default Course;