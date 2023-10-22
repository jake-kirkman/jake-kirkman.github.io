import './styles/bootstrap.custom.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PAGE_DEFINITIONS from './constants/pageConstants';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <div className="w-100 bg-white min-vh-100">
            <HashRouter>
                <Routes>
                    {
                        PAGE_DEFINITIONS.map(
                            pPage => (
                                <Route key={pPage.Path} path={pPage.Path} Component={() => {
                                    return (
                                        <pPage.Component {...(pPage.Props || {})}/>
                                    )
                                }}/>
                            )
                        )
                    }
                </Routes>
            </HashRouter>
        </div>
    </React.StrictMode>
);
