import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ul className={css.button__list}>
        {options.map(option => {
            return (<li key={option} className={css.button__item}><button className={`${css.button} ${option}`} onClick={() => onLeaveFeedback(option)}>{option}</button></li>)
        })}
    </ul >
)
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
