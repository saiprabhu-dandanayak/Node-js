import express from 'express';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

sequelize
  .sync()
  .then(() => console.log('Database synchronized'))
  .catch((error) => {
    console.error('Error during synchronization:', error);
  });

app.use('/api/v1', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
