import css from './Container.module.css';
import PropTypes from "prop-types";

const Container = ({ children }) => {
  console.log(children)
  return <div className={css.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

