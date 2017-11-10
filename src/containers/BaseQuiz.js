import React from 'react';

import AnswerFields from '../components/AnswerFields'
import TopDisplay from '../components/TopDisplay'

class BaseQuiz extends React.Component {
    state = {
        currentAnswer: null,
        currentIndex: 0,
        answerCorrectly: 0,
        quiz: [
            {question: 'Type 1', answer: '1'},
            {question: 'Type 2', answer: '2'},
            {question: 'Type 3', answer: '3'}
        ]
    }

    answerChangedHandler = (event) => {
        let newAnswer = event.target.value
        this.setState({currentAnswer: newAnswer})        
    }

    answerSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const quiz = this.state.quiz
        let currentIndex = this.state.currentIndex
        let answerCorrectly = this.state.answerCorrectly
        const currentAnswer = this.state.currentAnswer

        if (currentAnswer === quiz[currentIndex].answer){
            console.log('right')
            this.setState({
                currentIndex: currentIndex += 1,
                answerCorrectly: answerCorrectly += 1})
            console.log(currentIndex)
        } else {
            console.log('wrong')
            this.setState({currentIndex: currentIndex += 1})
        }

        this.setState({currentAnswer: null})
    }

    render(){
        const quiz = this.state.quiz
        const currentIndex = this.state.currentIndex
        const answerCorrectly = this.state.answerCorrectly
        
        let message = null
        // If a perfect score is achieved Perfect is displayed
        if (answerCorrectly === quiz.length ) {
            message = <TopDisplay title="Perfect"/>

        // If the current index is less than the quiz length,
        // the quiz continues

        } else if (currentIndex < quiz.length){
            message = 
            <div>                
            <TopDisplay title={quiz[currentIndex].question}/>
            <AnswerFields changed={this.answerChangedHandler} clicked={this.answerSubmit}/>
            </div>

        // If the quiz is completed and not perfect,
        // completed is displayed.

        } else {
            message = <TopDisplay title="Completed"/>
            
        }
        
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default BaseQuiz