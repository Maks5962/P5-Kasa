import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '/components/Layout';
import Home from '/pages/Home';
import About from '/pages/About';
import NotFound from '/pages/404'
import '/sass/main.scss'
import LogementDetail from '../components/logementdetail';

const App = () => {
    const [logements, setLogements] = useState([]); // État pour stocker les données JSON
    const [error, setError] = useState(null); // État pour gérer les erreurs potentielles

    // useEffect est utilisé pour charger les données JSON au moment du montage du composant
    useEffect(() => {
        fetch('/backend/logements.json') // Chemin relatif vers le fichier JSON dans le dossier public
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données'); // Gérer les erreurs de chargement
                }
                return response.json(); // Convertit la réponse en objet JSON
            })
            .then((data) => setLogements(data)) // Stocke les données JSON dans l'état
            .catch((error) => setError(error.message)); // Gère les erreurs en cas d'échec
    }, []); // Le tableau vide signifie que cet effet s'exécute uniquement au montage du composant

    return (
        <Router>
            <Routes>
                {/* Route avec le Layout pour chaque page */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home logements={logements} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/LogementDetail/:id" element={<LogementDetail logements={logements}/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;