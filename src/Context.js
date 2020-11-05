import React, { useState, useEffect, createContext } from 'react';
import { fetchApi } from './fetchApi';

export const WorldStatsContext = createContext();

export default function Context({ children }) {
    const [worldCovidStats, setWorldCovidStats] = useState([]);
    const url = 'https://api.covid19api.com/world/total'

    useEffect(() => {
        fetchApi(url)
            .then(data => {
                setWorldCovidStats(data)
            });
    }, []);


    return (
        <WorldStatsContext.Provider value={{worldCovidStats}}>
            {children}
        </WorldStatsContext.Provider>
    )
};
