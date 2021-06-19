import React, { } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterComponentStyle from '../Styles/FooterComponentStyle';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterComponent = (props) => {
  const { classes } = props;




  return (
    
    <div className={classes.container}>
      <div className={classes.container_main}>
      <div className={classes.about}>
        {/* <div>
          <h3 className={classes.heading}>About Me</h3>
          <p>I'm Bhagyashree Meghpal.And I develop world class simple and beautiful web applications.I'm pretty sure I already told you that on my bio,but i figured it was worth repeating,you know.just in case you weren't paying attention or something</p>
        </div> */}
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
      {/* <p style={{textAlign:'center',margin:0}}>Copyright ©2021 All rights reserved | This template is made with  by BMeghpal</p> */}

    </div>

    
  )
}
FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(FooterComponentStyle)(FooterComponent)
