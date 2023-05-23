import express from 'express';
import env from 'dotenv';
import carRoutes from './routes/index';
import router from './routes/routing';

env.config()

const server = express()
server.use(express.json())

server.use('/api', carRoutes, router)

const PORT = process.env.port || 3000;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
