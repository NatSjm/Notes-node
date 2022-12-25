import express from 'express';
import noteService from '../services/noteService';
import  toNewNoteEntry  from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(noteService.getEntries());
});

router.post('/', (req, res) => {

    try {
        const newEntry = toNewNoteEntry(req.body);

        const addedNote = noteService.addNote(newEntry);
        res.json(addedNote);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

router.get('/:id', (req, res) => {
    const note = noteService.findById(Number(req.params.id));
    if (note) {
        res.send(note);
    } else {
        res.sendStatus(404);
    }
});

router.delete('/:id', (req, res) => {
    noteService.deleteById(Number(req.params.id));
    res.status(204).end()
});

export default router;
