import s from "./FeedbackOptions.module.css"

function FeedbackOptions({options, onLeaveFeedback,}) {
    return (
        <ul className='controls'>
            {options.map((option) => <li key={option} className='controls__item'>
                <button type='button' onClick={() => onLeaveFeedback(option)}>{option}</button>
            </li>)}
            
        </ul>
    )

}

export default FeedbackOptions