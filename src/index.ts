import express from 'express';
import notesRouter from './routes/notes';

const PORT = process.env.PORT || 3001;

const unknownEndpoint = (_req: express.Request, res: express.Response) => {
    res.status(404).send({ error: 'unknown endpoint' })
};

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/notes', notesRouter);

app.use(unknownEndpoint);

const cors = require('cors');

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
