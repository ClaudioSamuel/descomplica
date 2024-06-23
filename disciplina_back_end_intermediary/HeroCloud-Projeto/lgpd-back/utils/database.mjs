import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'lgpd-database',
    'postgres',
    'postrgres',
    { 
        host:'localhost',
        dialect:'postgres',
        define: {
            timestamps:false
        }
    }
);

//disponibilizando o módulo
export default sequelize;