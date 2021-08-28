import React from 'react'

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
            <h2>THE QUESTIONS GOES HERE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vero eius dignissimos, eaque tempore quae possimus saepe vel nam accusamus nesciunt repellendus? Nulla dicta explicabo veritatis non esse beatae blanditiis accusamus inventore, doloribus delectus suscipit labore cum voluptates assumenda iure mollitia, consequuntur eaque maiores voluptatibus repudiandae laborum! Ipsam suscipit iure ratione pariatur quae recusandae molestias dignissimos praesentium neque dicta doloribus </p>
        </div>
    )
};
export default Quiz;
