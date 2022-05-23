import { User, Product } from "../models";

export async function createProduct(userId, productData) {
  if (!userId) {
    throw "userId es necesario";
  }
  const user = await User.findByPk(userId);
  if (user) {
    const product = await Product.create({
      productData,
    });
    return product;
  } else {
    throw "error, user not found";
  }
}
