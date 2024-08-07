import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [quote, setQuote] = useState('');
    const [savedQuotes, setSavedQuotes] = useState([]);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
            setQuote(response.data[0]);
        } catch (error) {
            console.error('Error fetching the quote', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const saveQuote = () => {
        setSavedQuotes([...savedQuotes, quote]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ron Swanson Quotes</h1>
                <div className="quote-card">
                    <p>{quote}</p>
                    <button onClick={fetchQuote}>New Quote</button>
                    <button onClick={saveQuote}>Save Quote</button>
                </div>
                <div className="saved-quotes">
                    <h2>Saved Quotes</h2>
                    {savedQuotes.map((savedQuote, index) => (
                        <div key={index} className="quote-card">
                            <p>{savedQuote}</p>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App