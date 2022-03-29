import { connection } from "./connection";

connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );
      
      CREATE TABLE IF NOT EXISTS labook_friends(
         user_id VARCHAR(255),
         friend_id VARCHAR(255),
         foreign key(user_id) references labook_users(id),
         foreign key(friend_id) references labook_users(id)
         );
   `)
   .then(console.log)
   .catch(console.log)