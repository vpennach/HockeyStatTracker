import React from "react";
import '../App.css';
import { Button } from './Button';
import './GetStarted.css';

function GetStarted(){
    return (
        <div className='start-container'>
            <h1>HOCKEY STAT TRACKER</h1>
            <div className='start-btns'>
                <Button
                className='btns'
                buttonStlye='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>

    );
}

export default GetStarted