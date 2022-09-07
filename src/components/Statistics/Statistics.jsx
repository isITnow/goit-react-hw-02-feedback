import s from './Statistics.module.css'
import PropTypes from 'prop-types';



function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
        <p className={s.info}>Good: { good}</p>
        <p className={s.info}>Neutral: { neutral}</p>
        <p className={s.info}>Bad: {bad}</p>
        <p className={s.info}>Total: {total}</p>
        <p className={s.info}>Positive feedback: { positivePercentage } %</p>
        </>
    )
}

export default Statistics

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
}