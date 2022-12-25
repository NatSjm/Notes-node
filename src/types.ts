export type Category = 'idea' | 'thought' | 'task';

export interface Note {
    id: number;
    title: string;
    content: string;
    category: Category;
    createdAt: string;
    isArchived: boolean
}
export type NewNote = Omit<Note, 'id' | 'createdAt' | 'isArchived'>;

