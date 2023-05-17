import express from "express";
import env from "dotenv";

env.config();

const server = express();
server.use(express.json());

// server.use("/turners/quotes"); 


const PORT = process.env.port || 3000;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
