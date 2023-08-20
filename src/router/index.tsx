import { Home } from 'pages/Home';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export default function Router() {
    let key = 1;
    return (
        <Routes>
            {routes.map((route) => {
                key++;
                const Element = route.element as FC;
                return <Route key={key.toString()} {...route} element={<Element />} />;
            })}
            <Route path="/*" element={<Home />} />
        </Routes>
    );
}
