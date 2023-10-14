import './styles/bootstrap.custom.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PAGE_DEFINITIONS from './constants/pageConstants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <div className="w-100 bg-white min-vh-100">
            <BrowserRouter>
                <Routes>
                    {
                        PAGE_DEFINITIONS.map(
                            pPage => (
                                <Route path={pPage.Path} Component={() => {
                                    return (
                                        <pPage.Component {...(pPage.Props || {})}/>
                                    )
                                }}/>
                            )
                        )
                    }
                </Routes>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);
