import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());

app.get('/setCookie', (req: Request, res: Response) => {
  res.cookie('username', 'Saiprabhu', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); 
  res.cookie('age', '23', { httpOnly: true, maxAge:24*60 * 60 * 60 * 1000 });
  res.send('Cookie has been set!');
});

app.get('/getCookie', (req: Request, res: Response) => {
  const cookies = req.cookies;
  res.json(cookies);
});

app.get('/clearCookie', (req: Request, res: Response) => {
  res.clearCookie('username');
  res.send('Cookie has been cleared!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
