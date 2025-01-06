import express from 'express';
import { logRequests } from './middleware/appMiddleware';
import { authenticateUser } from './middleware/routeMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import { jsonParser, urlEncodedParser } from './middleware/bodyParserMiddleware';
import { serveStaticFiles } from './middleware/staticFilesMiddleware';
import { requestTimeLogger } from './middleware/timingMiddleware';


const app = express();

app.use(logRequests); 
app.use(requestTimeLogger);

app.use(jsonParser);
app.use(urlEncodedParser);

app.use(serveStaticFiles);


app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/profile', authenticateUser, (req, res) => {
  res.json({ message: 'This is the profile page' });
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
