import { Sequelize } from "sequelize/types";

interface DatabaseInstance{
    sequelize: Sequelize;
    Sequelize: any;
}

export default DatabaseInstance;