import React from 'react';
import { makeStyles } from 'tss-react/mui';
import FooterComponentStyle from '../Styles/FooterComponentStyle';
import { NavHashLink } from 'react-router-hash-link';

const useStyles = makeStyles()(FooterComponentStyle);

const UpArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

const FooterComponent = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <p className={classes.copy}>
        Designed & Built by <span>Bhagyashree Meghpal</span> · 2026
      </p>
      <NavHashLink to="#Home" className={classes.backToTop}>
        Back to top <UpArrow />
      </NavHashLink>
    </footer>
  );
};

export default FooterComponent;
