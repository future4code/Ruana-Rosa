import { connection } from "./connection";

connection
    .raw(`
        CREATE TABLE IF NOT EXISTS cubo(
            id VARCHAR(255) PRIMARY KEY,
            firstName VARCHAR(255) NOT NULL,
            lastName VARCHAR(255) NOT NULL,
            participation FLOAT NOT NULL
        );
    `)
    .then(console.log)
    .catch(console.log)