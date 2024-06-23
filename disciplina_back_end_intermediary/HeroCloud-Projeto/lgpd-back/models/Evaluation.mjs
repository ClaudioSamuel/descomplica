import { DataTypes} from 'sequelize';
// conexão com o bd
import sequelize from '../utils/database.mjs';

// configurando  a tabela
const Evaluation = sequelize.define('evaluations', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    concept:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, { underscore: true });

export default Evaluation;