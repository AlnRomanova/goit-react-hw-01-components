import './Statistics.styles.css'
import Stats from 'components/Stats/Stats';
import PropTypes from "prop-types";

const Statistics = ({title, stats}) => {

  return (
    <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
  {stats.map((stat) => (
        <Stats
        key={stat.id} stat={stat}/>
    ))}
  </ul>
</section>
  )
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
}).isRequired).isRequired,
}



