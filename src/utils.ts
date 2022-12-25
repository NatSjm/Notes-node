import { NewNote } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};
const parseString = (entity: unknown, name: string): string => {
    if (!entity || !isString(entity)) {
        throw new Error(`Incorrect or missing ${name}`);
    }

    return entity;
};

const toNewNoteEntry = (reqObject: any): NewNote => {
    const newEntry: NewNote = {
        title: parseString(reqObject.title, 'title'),
        content: parseString(reqObject.content, 'content'),
        category: reqObject.category
    };

    return newEntry;
};

export default toNewNoteEntry;
