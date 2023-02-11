import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import { dbConnection } from "./src/database/config";

const user = require("./src/routes/user.routes");

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());

dbConnection();

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Notes backend is working!" });
});

app.use("/users", user);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default server;