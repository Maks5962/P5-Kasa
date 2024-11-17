import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../src/components/Layout';
import Home from '../../src/pages/Home';
import About from '../../src/pages/About';
import NotFound from '../../src/pages/404'
import '../../src/sass/main.scss'
import LogementDetail from '../../src/pages/logementdetail';
import { LogementProvider } from '../../src/hooks/useLogements';

const MyRouter = () => {

    return (
        <Router>
            <LogementProvider> {/* Ajout du provider (hook personnalisé) en super parent */}
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

export default MyRouter;