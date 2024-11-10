import React, { createContext, useContext, useState, useEffect } from 'react';

const LogementContext = createContext(); // Création du context (evite les props)

export const useLogements = () => useContext(LogementContext); // Hook personnalisé useLogements pour la lecture dans d'autre composant

export const LogementProvider = ({ children }) => { // Création du provider (super parent)
    const [logements, setLogements] = useState([]); // logements, error, loading accessible aux enfants
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // A chaque changement de [logements], execution du code
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
                    setLogements(data); // Mise à jour du tableau [logements] une fois les données chargées
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message); // En cas d'erreur
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