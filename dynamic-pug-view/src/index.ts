import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const user = { userName: 'Saiprabhu', email: 'saiprabhu365@gmail.com' };
  res.render('index', { title: 'Dynamic View with Pug', ...user });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
