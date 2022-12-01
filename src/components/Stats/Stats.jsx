import React from "react";


export default function Stats ({stat:{id, label, percentage}}) {
  const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <li
    style={{ backgroundColor: bgColor}}
    className="stat-item" key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{ percentage}%</span>
    </li>
  );
}
