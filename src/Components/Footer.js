import React from 'react';
import { makeStyles } from 'tss-react/mui';
import FooterComponentStyle from '../Styles/FooterComponentStyle';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles()(FooterComponentStyle);

const FooterComponent = () => {
  const { classes } = useStyles();

  return (

    <div className={classes.container}>
      <div className={classes.container_main}>
      <div className={classes.about}>
        <div>
          <h3 className={classes.heading}>Connect</h3>

          <a href="mailto:meghpalbhagya@gmail.com" className={classes.refrenceconnect} style={{ marginRight: '10px' }}><MailIcon className={classes.icons} /></a>
          <span>
            <a href="https://www.linkedin.com/in/bhagyashree-meghpal-1175a0163/" className={classes.refrenceconnect} style={{ marginRight: '10px' }}><LinkedInIcon className={classes.icons} /></a>
          </span>
          <span>
            <a href="https://twitter.com/meghpalbhagya" className={classes.refrenceconnect} style={{ marginRight: '10px' }}><TwitterIcon className={classes.icons} /></a>
          </span>
          <span>
            <a href="https://github.com/ashonweb" className={classes.refrenceconnect} style={{ marginRight: '10px' }}><GitHubIcon className={classes.icons} /></a>
          </span>
        </div>

      </div>
      <div className={classes.skills}>
        <h2 className={classes.heading}>Skills</h2>
        <ul className={classes.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Node,Express</li>


        </ul>

      </div>
      <div className={classes.contact}>
        <h2 className={classes.heading}>Contact</h2>
        <ul className={classes.list}>
          <li>Bangalore :560037,Karnataka,India </li>
          <li style={{ marginTop: '10px' }}>

            <a href="mailto:meghpalbhagya@gmail.com" style={{
              textDecoration: "none", color: "#888",
            }}>meghpalbhagya@gmail.com</a>

          </li>



        </ul>

      </div>
      </div>

    </div>


  )
}
export default FooterComponent
