import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1666315315203 } from "./migrations/CreateCategories";
import { CreateSpecifications1666411801132 } from "./migrations/CreateSpecifications";
import { CreateUsers1666551422604 } from "./migrations/CreateUsers";
import { AlterUserDeleteUsername1667250102389 } from './migrations/AlterUserDeleteUsername';
import { AlterUserAddAvatar1667266198025 } from "./migrations/AlterUserAddAvatar";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "1234",
    database: "rentx",
    entities: [Category, Specification, User],
    migrations: [
      CreateCategories1666315315203,
      CreateSpecifications1666411801132,
      CreateUsers1666551422604,
      AlterUserDeleteUsername1667250102389,
      AlterUserAddAvatar1667266198025
    ],
})

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource