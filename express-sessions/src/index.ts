import express, { Request, Response } from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    username?: string;
    role?: string;
  }
}

const app = express();
const PORT = 3000;

app.use(
  session({
    secret: 'mySecretKey',
    resave: false, 
    saveUninitialized: true, 
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, 
    },
  })
);

app.get('/set-session', (req: Request, res: Response) => {
  req.session.username = 'Saiprabhu';
  req.session.role = 'Developer';
  res.send('Session data has been set!');
});

app.get('/get-session', (req: Request, res: Response) => {
  const sessionData = {
    username: req.session.username,
    role: req.session.role,
  };
  res.json(sessionData);
});

app.get('/destroy-session', (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Unable to destroy session');
    }
    res.send('Session has been destroyed!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
