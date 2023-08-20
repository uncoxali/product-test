import 'assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Header';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from 'router';

function App() {
    return (
        <div>
            <Header />
            <Router />
            <ToastContainer />
        </div>
    );
}

export default React.memo(App);
