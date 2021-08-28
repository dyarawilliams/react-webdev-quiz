import React from 'react';
import LogoutButton from './LogoutButton';
import User from './User'

const Quiz = () => {
    const questions = [
        {
            question: 'What does HTML stand for ?',
            options: [
                { option: 'Hyperlinks Text Mark Language', iscorrect: false },
                { option: 'Hyper Text Markup Language', iscorrect: true },
                { option: 'Hyper Tag Markup Language', iscorrect: false }
            ]
        },
        {
            question: 'What does CSS stand for ?',
            options: [
                { option: 'Creative Style System', iscorrect: false },
                { option: 'Cascading Style Sheet', iscorrect: true },
                { option: 'Computing Style Sheet', iscorrect: false }
            ]
        },
        {
            question: 'Where should a CSS file be referenced in a HTML file ?',
            options: [
                { option: 'After all HTML code', iscorrect: false },
                { option: 'Inside the body section', iscorrect: false },
                { option: 'Inside the head section', iscorrect: true }
            ]
        }
    ];

    return (
        <div className="quiz-container">
            <div className="hud">
                <div id="hud-item">
                    <p id="progressText" className="hud-info">Question</p>
                    <div id="progressBar"></div>
                </div>
                <div id="hud-item">
                    <p className="hud-info">
                        <User />
                        <LogoutButton /> 
                    </p>
                </div>
                <div id="hud-item">
                    <p className="hud-info">Score</p>
                    <span>0</span>
                </div>
            </div>
            <div className="question-container">
                <h2 id="question">THE QUESTION GOES HERE</h2>
                <div className="answer-container">
                    <p className="answer-choice">a</p>
                    <p className="answer-info">Answer #1</p>
                </div>
                <div className="answer-container">
                    <p className="answer-choice">b</p>
                    <p className="answer-info">Answer #2</p>
                </div>
                <div className="answer-container">
                    <p className="answer-choice">c</p>
                    <p className="answer-info">Answer #3</p>
                </div>
                <div className="answer-container">
                    <p className="answer-choice">d</p>
                    <p className="answer-info">Answer #4</p>
                </div>
            </div>
        </div>
    )
};
export default Quiz;
