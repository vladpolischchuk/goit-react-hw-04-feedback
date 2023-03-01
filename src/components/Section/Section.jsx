import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h1 className={css.section__title}>{title}</h1>
            {children}
        </section>
    );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

