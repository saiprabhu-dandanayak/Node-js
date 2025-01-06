import express , {Request , Response} from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req : Request, res: Response) => {
  const user = { userName: 'Saiprabhu', email: 'saiprabhu365@gmail.com' };
  res.render('index', { title: 'Dynamic View', ...user });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
