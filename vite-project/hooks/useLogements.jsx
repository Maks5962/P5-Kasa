import React, { createContext, useContext, useState, useEffect } from 'react';

const LogementContext = createContext(); // Création du context

export const useLogements = () => useContext(LogementContext); // Hook personnalisé

export const LogementProvider = ({ children }) => {
    const [logements, setLogements] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ne pas effectuer le fetch si les logements sont déjà chargés
        if (logements.length === 0) { // Dans le cas ou les données ne sont pas chargées
            setLoading(true);
            fetch('/backend/logements.json')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement des données');
                    }
                    return response.json();
                })
                .then((data) => {
                    setLogements(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [logements]);

    return (
        <LogementContext.Provider value={{ logements, error, loading }}>
            {children}
        </LogementContext.Provider>
    );
};