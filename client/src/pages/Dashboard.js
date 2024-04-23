import React, { useState, useEffect } from 'react'; import Table from '../components/Table';
import { useQuery } from 'react-query';
import { getCharactersFromAPI } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';
import { sringIncluded } from '../utils/stringUtils'

function Dashboard() {
    const { isLoading, error, data } = useQuery('characters', () => getCharactersFromAPI().then(res => res.results));

    const [query, setQuery] = useState("")
    const [filteredData, setFilteredData] = useState(undefined);
    const debouncedValue = useDebounce(query, 500);

    useEffect(() => {
        if (data) {
            const newFilteredData = data.filter(c => sringIncluded(c.name, debouncedValue))
            setFilteredData(newFilteredData)
        }
    }, [debouncedValue, data]);

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>An error has occurred: {error.message}</p>;

    return (
        <div>
            <div className="search">
                <input type="text"
                    placeholder={"Search Character"}
                    className={"input"}
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                />
            </div>
            <Table data={filteredData || data} />
        </div>
    );
}

export default Dashboard;
