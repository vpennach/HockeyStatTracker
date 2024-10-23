import React from 'react';
import './AboutInfo.css';
import { Link } from 'react-router-dom';

function AboutInfo(){
    return (
        <div className='info-container'>
            <h1>About</h1>
            <hr className="divider" /> 
            <div className="content1-wrapper">
                <div className="p1-wrapper">
                    <h1>Goal</h1>
                    <p> This project was started as a way to use what I have learned
                        at Stevens Institute of Technology while also teaching myself
                        new web development skills. I wanted to create something I
                        was passionate about while also challenging myself in areas
                        of development I have not used before. I wanted to create a 
                        software that allows anyone to input a team and begin keeping 
                        track of their own stats in a very efficient way. This project 
                        not only gave me a hands-on opportunity to learn key web technologies
                        like React, JavaScript, CSS, and MongoDB, but also allowed me 
                        to build a tool that combines my love of sports with the power
                        of data.
                    </p>
                </div>

                <div className="image1-wrapper">
                    <img src="/StanleyCup.png" alt="Stanley Cup" className="stanley" />
                </div>
            </div>
            <hr className="divider" /> 
            <div className="content2-wrapper">
                <div className="p2-wrapper">
                    <h1>How it Works</h1>
                    <p> This application takes an approach similar to that of stenography to track
                        stats. While it is intuitive to use there is a learning curve to be 
                        efficent and accurate when recording the stats. Like how a stenographer can 
                        type upwards of 300 words per minute with years of practice. Perfecting this
                        software can allow the user to track stats with 100% accuracy in real time
                        of the game occuring. The software is adaptable to any team, since the user
                        is prompted with inputting the information before the recording session starts.
                        After recording is finished the user will receive a spreadsheet file of the
                        stats they recorded during the game.
                    </p>
                </div>

                <div className="image2-wrapper">
                    <img src="/PlaceHolder.png" alt="Stat Sheet" className="statsheet" />
                </div>
            </div>
        </div>

    );
}

export default AboutInfo