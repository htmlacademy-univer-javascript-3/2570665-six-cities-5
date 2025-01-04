import { User } from './user';

export type Review = {
    user: User;
    comment: string;
    rating: number;
    date: string;
    id: string;
};
