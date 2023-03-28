import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { setRandomColor } from '../utils/functions';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={css.statistics}>
        {title != null && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat__list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.item}
                key={id}
                style={{ backgroundColor: `rgb(${setRandomColor()}) ` }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
