import { User } from "./user";
import { Auth } from "./auth";
import { Product } from "./product";

Auth.belongsTo(User);
User.hasMany(Product);
Product.belongsTo(User);

export { User, Auth, Product };
