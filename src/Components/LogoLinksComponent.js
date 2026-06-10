import React, { useState, useEffect, } from 'react';
import { makeStyles } from 'tss-react/mui';
import LogoLinksComponentStyle from '../Styles/LogoLinksComponentStyle';
import {  Drawer, IconButton, List, Divider, ListItem, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AboutMeComponent from './AboutMeComponent'
import HomeComponent from './HomeComponent';
import Projects from './Projects';
import Resume from './ResumeComponent';
import Contact from './ContactComponent'

import { NavHashLink } from 'react-router-hash-link';

const useStyles = makeStyles()(LogoLinksComponentStyle);

const LogoLinksComponent = () => {
  const { classes } = useStyles();
  const [open, handleOpendrawer] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const[scroll,setScroll] = useState(0)
  const handleDrawerClose = () => {
    handleOpendrawer(false)
  }
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setSticky(true);
      setScroll(window.scrollY)

    }
    else  {
      setSticky(false);
      setScroll(0)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={classes.logo_links} style={{ zIndex: isSticky === true ? '3' : '', position: isSticky === true ? 'fixed' : '', background: isSticky === true ? 'white' : '', top: isSticky === true ? 0 : '', height: isSticky === true ? '60px' : '',boxShadow: isSticky === true ? '0 0 3px grey' : '' }}>
        <div className={classes.logosection}>
          <NavHashLink to='#Home' className={isSticky === true ? classes.logofixed : classes.logo}>BM</NavHashLink>
        </div>
        <div className={classes.linksection}>
          <div className={classes.desktop}>

          <NavHashLink to='#Home' style={{color:(scroll<400)?"white":'black'}} className={isSticky === true ? classes.linksfixed : classes.links}>Home</NavHashLink>
          <NavHashLink style={{color:(scroll<400 )?"rgba(255, 255, 255, 0.5)":(scroll<1600)?'#96bb7c':'black'}} to='#AboutMe' className={(isSticky === true)? classes.linksfixed : classes.links}>About Me</NavHashLink>
          <NavHashLink to='#Projects' style={{color:(scroll<400 )?"rgba(255, 255, 255, 0.5)":(scroll<1600)?'black': (scroll<2625)?'#96bb7c':'black'}} className={isSticky === true ? classes.linksfixed : classes.links}>Projects</NavHashLink>
          <NavHashLink to='#Resume' style={{color:(scroll<400 )?"rgba(255, 255, 255, 0.5)":(scroll<2625)?'black':(scroll<3320)?'#96bb7c':'black'}} className={isSticky === true ? classes.linksfixed : classes.links}>Resume</NavHashLink>
          <NavHashLink to='#ContactMe' style={{color:(scroll<400 )?"rgba(255, 255, 255, 0.5)":(scroll<3320)?'black':'#96bb7c'}} className={isSticky === true ? classes.linksfixed : classes.links}>Contact Me</NavHashLink>

          </div>
          <div className={classes.mobile}  >
            <IconButton onClick={() => handleOpendrawer(!open)} className={isSticky === true ? classes.iconbutton_color : classes.iconbutton}
              aria-label="open drawer"
              edge="end"

            >
              <MenuIcon className={classes.menuiconbutton} />
            </IconButton>

          </div>
        </div>
      </div>

      {(open === true && window.innerWidth < 960) && (
        <ClickAwayListener onClickAway={handleDrawerClose}>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {['Home', 'AboutMe', 'Projects', 'Resume', 'Contact Me'].map((links, index) => (
                <ListItem key={links}>
                  <NavHashLink to={'#'+links} className={classes.mobilelinks}>{links}</NavHashLink>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ClickAwayListener>

      )}
      <div id="Home">

        <HomeComponent />
      </div>
      <div id="AboutMe">
        <AboutMeComponent />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Resume">
        <Resume />
      </div>
      <div id="ContactMe">
        <Contact />
      </div>
    </div>
  )


}
export default LogoLinksComponent
