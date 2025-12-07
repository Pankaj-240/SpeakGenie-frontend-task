import React from 'react'
import QuizTemplateCardOne from './QuizTemplateCardOne'
import QuizTemplateCardTwo from './QuizTemplateCardTwo'
import QuizTemplateCardThree from './QuizTemplateCardThree'
import QuizTemplateCardFour from './QuizTemplateCardFour'

const QuizMainSection = () => {
  return (
    <div className='h-280 '>
      <QuizTemplateCardOne/>
      <QuizTemplateCardTwo/>
      <QuizTemplateCardThree/>
      <QuizTemplateCardFour/>
    </div>
  )
}

export default QuizMainSection
