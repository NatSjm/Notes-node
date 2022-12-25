import notesData from '../../data/notes';
import { Note, NewNote } from '../types';


let notes: Array<Note> = notesData;
const findById = (id: number): Note | undefined => {
    const note = notes.find(n => n.id === id);
    return note;
};


const getEntries = (): Array<Note> => {
    return notes;
};



const addNote = (newEntity: NewNote ) => {
    const timestamp = Date.now();
    const newNote = {
      ...newEntity,
        id: timestamp,
        isArchived: false,
        createdAt: (new Date(timestamp)).toLocaleDateString(),
    };

    notes.push(newNote);
    return newNote;
};

const deleteById = (id: Number) => {
    notes = notes.filter(note => note.id !== id)
};

export default {
    getEntries,
    addNote,
    findById,
    deleteById
};
