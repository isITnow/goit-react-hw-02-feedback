import s from "./Section.module.css";
import PropTypes from 'prop-types';


function Section({ title, children }) {
    return (
        <>
            <p className={s.title}>{title}</p>
            { children }
        </>
    )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}