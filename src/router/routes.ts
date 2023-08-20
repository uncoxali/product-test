import { Home } from 'pages/Home';
import { FC } from 'react';

interface Type {
    element: FC;
    path: string;
}

export const routes: Type[] = [
    {
        element: Home,
        path: '/',
    },
];
