// GetStarted.js
import React, { useState } from "react";
import '../App.css';
import { Button } from './Button';
import '../styles/GetStarted.css';
import StatIntro from './StatIntro';

function GetStarted() {

    const [showIntro, setShowIntro] = useState(false);

    const handleGetStartedClick = () => {
        setShowIntro(true);
    };

    const handleCloseIntro = () => {
        setShowIntro(false);
    };

    return (
        <div className='start-container'>
            <h1>HOCKEY STAT TRACKER</h1>
            <div className='start-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleGetStartedClick}
                >
                    GET STARTED
                </Button>
            </div>
            {showIntro && <StatIntro onClose={handleCloseIntro} />}
        </div>
    );
}

export default GetStarted;

