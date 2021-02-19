import React from 'react'
class QuizComponent extends React.Component {
    componentDidMount() {
        document.body.style.backgroundColor = "rgb(0,0,139)";
    }
    render() {
        return (
            <div class="White-Container">
                <h1>Question</h1>
                <p id="question">4 of 15</p>
                <p align="center">What is the only mammal that can't Jump?</p>
                <div className="Option-Container">
                    <div class="options">
                        <button className="blue-button button-radius">Dog</button>
                        <button className="blue-button button-radius">Goat</button>
                    </div>
                    <div class="options">
                        <button className="blue-button button-radius">Elephant</button>
                        <button className="blue-button button-radius">Lion</button>
                    </div>
                </div>
                <div class="Button-Container">
                    <button class="bluebackground-button">Previous</button>
                    <button class="greenbackground-button">Next</button>
                    <button class="palevioletred-button">Quit</button>
                </div>
            </div>
        )
    };
}
export default QuizComponent;