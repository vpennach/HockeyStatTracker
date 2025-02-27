// GetStarted.js
import React, { useState } from "react";
import '../App.css';
import { Button } from './Button';
import '../styles/GetData.css';
import axios from 'axios';

function GetData() {
    const [data, setData] = useState(null);

    const handleGetDataClick = async () => {
        try {
            //console.log("Attempting to fetch data..."); // Add this log
            const response = await axios.get('http://localhost:5000/api/team-data'); // Ensure URL is correct
            //console.log("Data fetched:", response.data); // Log fetched data
            setData(response.data); // Set the fetched data in state
        } catch (error) {
            console.error("Error fetching data:", error); // Log any errors
        }
    };

    return (
        <div className='data-container'>
            <div className='start-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleGetDataClick}
                >
                    GET DATA
                </Button>
            </div>
            {/* Display fetched data */}
            {data && (
                <div className="data-display">
                    <h2>Fetched Data:</h2>
                    <p><strong>ID:</strong> {data._id}</p>
                    <p><strong>Team:</strong> {data.team}</p>
                    <p><strong>Opponent:</strong> {data.opp}</p>
                </div>
            )}
        </div>
    );
}