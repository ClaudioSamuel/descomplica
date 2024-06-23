import User from './User.mjs';
import Teacher from './Teacher.mjs';
import Course from './Course.mjs';
import Evaluation from './Evaluation.mjs';


//relacionamento das tables
const association = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation);
}

const factory = {
    association
}

export default factory;