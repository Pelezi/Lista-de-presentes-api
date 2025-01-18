import { seedProducts } from "./products"
import { seedUserTypes } from "./userTypes";

export const seedDatabase = async () => {
    await seedUserTypes();
    await seedProducts();
}