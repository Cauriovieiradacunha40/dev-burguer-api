import { Model } from "sequelize";



class user extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
        }, {
            sequelize
        });
    }
}
 
export default user;    
