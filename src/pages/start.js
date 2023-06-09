import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AsteroidField from '../components/AsteroidField';

import '../styles/start.css'

const AppStart = () => {
    const [data, setData] = useState('');

    // Get today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let todayFormatted = yyyy + '-' + mm + '-' + dd;
    /* for debugging */
    console.log("Today's date: " + todayFormatted);

    // Get the date 7 days ago
    let sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    let ddSeven = String(sevenDaysAgo.getDate()).padStart(2, '0');
    let mmSeven = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0');
    let yyyySeven = sevenDaysAgo.getFullYear();

    let sevenDaysAgoFormatted = yyyySeven + '-' + mmSeven + '-' + ddSeven;
    /* for debugging */
    console.log("Seven days ago: " + sevenDaysAgoFormatted);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${sevenDaysAgoFormatted}&end_date=${todayFormatted}&api_key=hmW7KN79f5Rvj7qBTcGSy5a4XZ6sQBvEnpjdvxMP`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="App">
            <AsteroidField 
                data={data}
            />
        </div>
    );
};

export default AppStart;