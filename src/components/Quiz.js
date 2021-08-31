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
                { option: 'Hyper Tag Markup Language', iscorrect: false },
                { option: 'Hyperlinks Tag Markup Language', iscorrect: false }
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
                    <p id="progressText" className="hud-info">Question 1<span>/{questions.length}</span> </p>
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
                <h2 id="question">{questions[0].question}</h2>
                <div className="answer-section">
                    { questions[0].options.map((answerOption) => (
                        <p className="answer-container">{answerOption.option}</p> 
                    ))}
                </div>
                
            </div>
        </div>
    )
};
export default Quiz;
