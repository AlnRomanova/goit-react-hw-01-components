import PropTypes from "prop-types";
import css from './Stats.module.css'

const Stats = ({stat:{id, label, percentage}}) => {
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <li
    style={{ backgroundColor: bgColor}}
    className={css.item} key={id}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{ percentage}%</span>
    </li>
  );
}

export default Stats;

Stats.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}


