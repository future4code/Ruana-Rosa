
import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  
  // Assim a chamada funciona fora dos endpoints com .then()/.catch
  getActorById("001")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });
  
  // Assim a chamada funciona fora dos endpoints com await
  (async () => {
    console.log(await getActorById("001") )
  })()
  
  
  // Ou então podemos chamá-la dentro de um endpoint
  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };
  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };
  const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };
  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 
  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };
  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.salary
      );
  
      res.status(200).send();
    } catch (err: any ) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });