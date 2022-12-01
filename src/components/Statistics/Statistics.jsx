import React from 'react';
import css from '../Statistics/Statistics.styles.css'
import Stats from "../Stats/Stats";

const Statistics = ({title, stats}) => {

  return (
    <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
  {stats.map((stat) => (
        <Stats stat={stat}/>
    ))}
  </ul>
</section>
  )
}

export default Statistics



