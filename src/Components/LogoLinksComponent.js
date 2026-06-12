import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import LogoLinksComponentStyle from '../Styles/LogoLinksComponentStyle';
import { Drawer, IconButton, List, ListItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavHashLink } from 'react-router-hash-link';
import HomeComponent from './HomeComponent';
import AboutMeComponent from './AboutMeComponent';
import Projects from './Projects';
import Resume from './ResumeComponent';
import Contact from './ContactComponent';

const useStyles = makeStyles()(LogoLinksComponentStyle);

const NAV_LINKS = [
  { label: 'About', href: '#AboutMe', id: 'AboutMe' },
  { label: 'Projects', href: '#Projects', id: 'Projects' },
  { label: 'Resume', href: '#Resume', id: 'Resume' },
];

const LogoLinksComponent = () => {
  const { classes } = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['Home', 'AboutMe', 'Projects', 'Resume', 'ContactMe'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <div>
      <nav className={`${classes.nav} ${isScrolled ? classes.navScrolled : ''}`}>
        <NavHashLink to="#Home" className={classes.logo}>
          bm<span>.</span>
        </NavHashLink>

        <div className={classes.navRight}>
          <div className={classes.desktop}>
            {NAV_LINKS.map(link => (
              <NavHashLink
                key={link.id}
                to={link.href}
                className={`${classes.navLink} ${activeSection === link.id ? classes.navLinkActive : ''}`}
              >
                {link.label}
              </NavHashLink>
            ))}
            <NavHashLink to="#ContactMe" className={classes.navCta}>
              Contact
            </NavHashLink>
          </div>

          <div className={classes.mobile}>
            <IconButton className={classes.menuBtn} onClick={() => setDrawerOpen(true)} aria-label="open menu">
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <NavHashLink to="#Home" className={classes.drawerLogo} onClick={() => setDrawerOpen(false)}>
            bm<span>.</span>
          </NavHashLink>
          <IconButton className={classes.drawerCloseBtn} onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List disablePadding>
          {NAV_LINKS.map(link => (
            <ListItem key={link.id} disablePadding>
              <NavHashLink
                to={link.href}
                className={classes.mobileLink}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </NavHashLink>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', my: 1 }} />
        <NavHashLink to="#ContactMe" className={classes.mobileCta} onClick={() => setDrawerOpen(false)}>
          Contact
        </NavHashLink>
      </Drawer>

      <div id="Home"><HomeComponent /></div>
      <div id="AboutMe"><AboutMeComponent /></div>
      <div id="Projects"><Projects /></div>
      <div id="Resume"><Resume /></div>
      <div id="ContactMe"><Contact /></div>
    </div>
  );
};

export default LogoLinksComponent;
