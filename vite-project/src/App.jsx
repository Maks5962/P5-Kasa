import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '/components/Layout';
import Home from '/pages/Home';
import About from '/pages/About';
import NotFound from '/pages/404'
import '/sass/main.scss'
import LogementDetail from '../pages/logementdetail';
import { LogementProvider } from '/hooks/useLogements';

const App = () => {

    return (
        <Router>
            <LogementProvider>
                <Routes>
                
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/LogementDetail/:id" element={<LogementDetail />} />
                    </Route>
                
                </Routes>
            </LogementProvider>
        </Router>
    );
};

export default App;