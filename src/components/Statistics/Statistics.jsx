import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <ul className={css.stats__list}>
            <li className={css.stats__item}>
                Good: {good}
            </li>
            <li className={css.stats__item}>
                Neutral: {neutral}
            </li>
            <li className={css.stats__item}>
                Bad: {bad}
            </li>
            <li className={css.stats__item}>
                Total: {total}
            </li>
            <li className={css.stats__item}>
                Positive feedback: {positivePercentage}%
            </li>
        </ul>

    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};