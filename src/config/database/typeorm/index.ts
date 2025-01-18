import dataSource from "./data-source";

import { seedDatabase } from "../../../shared/database/seeders";

async function main() {
    await dataSource.initialize();
    await seedDatabase()
        .then(() => console.log("Seeding completo."))
        .catch((error) => console.error("Erro durante o seeding:", error));
}

main();
