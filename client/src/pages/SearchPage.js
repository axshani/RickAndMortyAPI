import React, { useState, useEffect } from 'react';
import { getSingleCharacterFromAPI } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';
import Character from '../components/Character';

function Dashboard() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState(undefined)
    const debouncedValue = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedValue !== "") {
            getSingleCharacterFromAPI(debouncedValue).then(res => setData(res.results[0]))
        }
    }, [debouncedValue]);

    return (
        <div>
            <input type="text"
                placeholder={"Search by name"}
                className="search"
                onChange={event => setQuery(event.target.value)}
                value={query}
            />
            {data && <Character character={data} />}
        </div>
    );
}

export default Dashboard;
