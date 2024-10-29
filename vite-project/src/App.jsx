import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '/components/Layout';
import Home from '/pages/Home';
import About from '/pages/About';
import NotFound from '/pages/404'
import '/sass/main.scss'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Route avec le Layout pour chaque page */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;